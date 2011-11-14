class InvoicesController < ApplicationController
  
  before_filter :require_authentication!
  
  respond_to :json
  
  def index
    respond_with(current_user.invoices)
  end
  
  def show
    @users_company = Client.find(current_account.owner_client_id)
    
    @invoice = current_account.invoices.find(params[:id])
    @invoice_lines = @invoice.invoice_lines
    @invoice_total_tax = 0  
    @invoice_total_before_tax = 0

    respond_to do |format|
      format.html
      format.pdf do
        render :pdf => "invoice_#{params[:id]}_pdf"#, :show_as_html => true
      end
    end
  end
  
  def new
    if params[:report]
      @report = Report.new(params[:report])     
      
      start_date = (@report.start_date.to_s + " 00:00:00").to_date
      end_date = (@report.end_date.to_s + " 23:59:59").to_date

      @time_entries = current_account.time_entries.includes(:project).includes(:user).date_range(start_date, end_date)
      
      if !@report.user_id.blank?
        @time_entries = @time_entries.by_user(@report.user_id)
      end
      if !@report.project_id.blank?
        @time_entries = @time_entries.by_project(@report.project_id)
      end
      if !@report.to_do_item_id.blank?
        @time_entries = @time_entries.by_to_do_item(@report.to_do_item_id)
      end
      if !@report.client_id.blank?
        @time_entries = @time_entries.by_client(@report.client_id)
      end
      if !@report.to_do_item_id.blank?
        @time_entries = @time_entries.by_to_do_item(@report.to_do_item_id)
      end
    end
    
    @invoice = current_account.invoices.new
    @invoice.invoice_lines.build
    @incrementor = 0
    @running_total = 0
    @clients = current_account.clients
    @client = @clients.first
    
    @yearly_invoice_count = current_account.invoices.where("created_at > ?", Time.now.year).size()
    @default_invoice_id = @client.client_code.to_s + "-" + Time.now.year.to_s + "-" + "#{@yearly_invoice_count + 1}"
  end
  
  def create
    invoice = current_user.invoices.build(params[:invoice])

    if invoice.save 
      respond_with(invoice)
    else
      respond_with(invoice)
    end
  end
  
  def edit
    @invoice = current_account.invoices.find(params[:id])
    @clients = current_account.clients
    @invoice_lines = @invoice.invoice_lines
    @running_total = 0
    @incrementor = 0
  end
  
  def update
    @invoice = current_account.invoices.find(params[:id])
      
    if @invoice.update_attributes(params[:invoice])
      redirect_to(invoices_url, :notice => ["success", "The invoice #{@invoice.name} was successfully updated."])
    else
      @clients = current_account.clients
      @invoice_lines = @invoice.invoice_lines
      @running_total = 0
      @incrementor = 0
      render :action => :edit    
    end        
  end
  
  def destroy
    @invoice = current_account.invoices.find(params[:id])
    @invoice_lines = @invoice.invoice_lines
    if @invoice.destroy
      @invoice_lines.destroy
      redirect_to(invoices_url, :notice => ["success", "The invoice #{@invoice.name} was successfully deleted."])
    else 
      render :action => :index
    end
  end
  
end

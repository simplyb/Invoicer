class Invoice < ActiveRecord::Base
  
  ##
  # Associations
  ##
  belongs_to :user
  has_many :invoice_lines, :dependent => :destroy
  accepts_nested_attributes_for :invoice_lines, :reject_if => proc { |attrs| attrs.all? { |k, v| v.blank? } }, :allow_destroy => true 

  ##
  # Callbacks
  ##
  before_update :delete_invoice_lines
  
  ##
  # Validations
  ##
  validates_presence_of :user, :name
  
  ##
  # Readers / Writers / Accessors / Accessibility
  ##
  attr_accessible :date, :name, :customer_name, :part_order_num, :additional_info, :tax, :due_date, :paid_on_date, :client_id, :created_at, :invoice_lines_attributes
  
  ##
  # Instance Methods
  ##
  
  def as_json(options={})
    super(:only => [:id, :date, :name, :customer_name, :part_order_num, :additional_info, :tax, :due_date, :paid_on_date, :created_at], :include => :invoice_lines)
  end
  
  private
  
  def delete_invoice_lines
    InvoiceLine.delete_all(:invoice_id => self.id)
  end

end

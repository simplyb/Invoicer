class AddCustomerNameToInvoice < ActiveRecord::Migration
  def change
    add_column :invoices, :customer_name, :string
  end
end

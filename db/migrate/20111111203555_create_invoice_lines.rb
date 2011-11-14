class CreateInvoiceLines < ActiveRecord::Migration
  def up
    create_table :invoice_lines, :force => true do |t|
      t.datetime "created_at"
      t.datetime "updated_at"
      t.decimal  "quantity",    :precision => 10, :scale => 3
      t.string   "description"
      t.integer  "price"
      t.boolean  "apply_tax"
      t.integer  "invoice_id"
    end
  end

  def down
    drop_table :invoice_lines
  end
end

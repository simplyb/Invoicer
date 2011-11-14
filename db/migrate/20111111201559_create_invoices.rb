class CreateInvoices < ActiveRecord::Migration
  def up
    create_table :invoices do |t|
      t.datetime "created_at"
      t.datetime "updated_at"
      t.datetime "date"
      t.string   "name"
      t.string   "part_order_num"
      t.text     "additional_info"
      t.integer  "tax"
      t.datetime "due_date"
      t.datetime "paid_on_date"
      t.integer  "user_id"
    end
  end

  def down
    drop_table :invoices
  end
end

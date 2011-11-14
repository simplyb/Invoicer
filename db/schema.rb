# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20111112000217) do

  create_table "invoice_lines", :force => true do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
    t.decimal  "quantity",    :precision => 10, :scale => 3
    t.string   "description"
    t.integer  "price"
    t.boolean  "apply_tax"
    t.integer  "invoice_id"
  end

  create_table "invoices", :force => true do |t|
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
    t.string   "customer_name"
  end

  create_table "users", :force => true do |t|
    t.string   "email"
    t.string   "password_digest"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end

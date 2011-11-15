require 'spec_helper'

describe "invoice user interface" do
  
  before(:all) do
    Capybara.current_driver = :selenium
  end
  
  before(:each) do
    user = Factory(:user)
    login(user)
  end
  
  it "should create an invoice", :js => true do
    page.should have_css('.create_invoice')
    fill_in "invoice[name]", :with => "Invoice 0001"
    fill_in "invoice[customer_name]", :with => "Customer 1"
    fill_in "invoice[due_date]", :with => "2011-11-16"
    click_on "Create Invoice"
    
    within("ul.list") do 
      wait_until(5) { page.should have_content("Invoice 0001")}
    end
    
  end

end
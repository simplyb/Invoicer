module Invoicer
  module Authentication
    
    def login(user)
      page.reset!
      visit (new_session_path)
      wait_until(5) { page.should have_css("#email") }
      fill_in "email", :with => user.email
      fill_in "password", :with => user.password
      click_on "Sign in"
    end

  end
end
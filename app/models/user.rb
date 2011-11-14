class User < ActiveRecord::Base
  has_secure_password
  validates :password, :presence => true, :on => :create
  
  attr_accessible :email, :password, :password_confirmation
  
  has_many :invoices
end

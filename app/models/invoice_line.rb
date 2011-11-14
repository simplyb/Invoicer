class InvoiceLine < ActiveRecord::Base
  
  ##
  # Includes
  ##
  # include Paranoia
  
  ##
  # Associations
  ##
  belongs_to :invoice
  
  ##
  # Validations
  ##
  before_validation :set_price, :on => :create

  ##
  # Readers / Writers / Accessors / Accessibility
  ##
  attr_accessor :price_in_dec
  attr_accessible :description, :price, :apply_tax, :quantity
  
  def as_json(options={})
    super(:only => [:id, :description, :price, :apply_tax, :quantity])
  end
  
  ##
  # Instance Methods
  ##
  private
  
  def set_price
    self.price = (self.price_in_dec.to_f * 100)
  end
  
end

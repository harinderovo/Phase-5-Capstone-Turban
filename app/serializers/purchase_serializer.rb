class PurchaseSerializer < ActiveModel::Serializer
  attributes :id, :quantity, :user_id, :product, :time_stamp_format
  # has_one :user
  # has_one :product
  
  def time_stamp_format
    self.object.created_at.strftime("Purchased on %m/%d/%Y") + ", " + self.object.created_at.strftime("at %I:%M%p")
  end
end

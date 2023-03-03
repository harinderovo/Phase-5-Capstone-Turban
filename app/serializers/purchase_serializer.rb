class PurchaseSerializer < ActiveModel::Serializer
  attributes :id, :quantity, :user_id, :product_id
  # has_one :user
  # has_one :product
end

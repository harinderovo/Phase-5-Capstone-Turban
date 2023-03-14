class PurchaseSerializer < ActiveModel::Serializer
  attributes :id, :quantity, :user_id, :product, :created_at
  # has_one :user
  # has_one :product
end

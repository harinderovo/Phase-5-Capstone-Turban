class PurchaseSerializer < ActiveModel::Serializer
  attributes :id, :quantity, :user_id, :product_id
end

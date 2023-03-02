class BookingSerializer < ActiveModel::Serializer
  attributes :id, :datetime, :location, :price, :status
  has_one :user
  has_one :event
end

class BookingSerializer < ActiveModel::Serializer
  attributes :id, :datetime, :location, :price, :status, :event_id
  has_one :user
  has_one :event
end

class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :name, :phone_number, :bookings_requests
  has_many :bookings
  has_many :purchases

  def booking_requests
    self.object.email == "harmiglany@yahoo.com" ? Booking.where(status: "Pending") : nil
  end
end

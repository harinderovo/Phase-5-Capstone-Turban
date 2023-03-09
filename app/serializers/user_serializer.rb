class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :name, :phone_number, :bookings_requests
  has_many :bookings
  has_many :purchases

  def bookings_requests
    self.object.email == "harinder@gmail.com" ? Booking.where(status: "Pending") : nil
  end
end

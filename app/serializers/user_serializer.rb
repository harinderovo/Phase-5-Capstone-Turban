class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :password_digest, :name, :phone_number
  has_many :bookings
  has_many :purchases
end

class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :password_digest, :name, :phone_number
end

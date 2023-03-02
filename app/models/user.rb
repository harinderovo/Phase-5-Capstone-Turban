class User < ApplicationRecord
    has_many :bookings
    has_many :events, through: :bookings
    has_many :purchases
    has_many :products, through: :purchases
    has_secure_password

    validates :phone_number, format: { with: /\A\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}\z/,
                              message: I18n.t('global.errors.phone_format')}
end

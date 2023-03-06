class CreateBookings < ActiveRecord::Migration[6.1]
  def change
    create_table :bookings do |t|
      t.datetime :datetime
      t.string :location
      # t.string :name
      # t.string :phone_number
      # t.string :email
      t.references :user, null: false, foreign_key: true
      t.references :event, null: false, foreign_key: true
      t.float :price
      t.string :status, default: "Pending"

      t.timestamps
    end
  end
end

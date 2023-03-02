# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts '🍪 Seeding events...'

Event.create(
  [
    { name: 'Baby Shower' },
    { name: 'Wedding' },
    { name: 'Wedding Reception' },
    { name: 'Engagement' },
    { name: 'Photoshoot' },
    { name: 'Bar-mitzvah' },
    { name: 'Birthday Party' },
  ],
)

puts '🍪 Seeding users...'
User.create(
  [
    { name: 'Keith Ma', email: 'keithma@gmail.com', password: 'keithm@', phone_number: '9512560735' },
    { name: 'Jason Tran', email: 'tranjason@gmail.com', password: 'tran69', phone_number: '9515617832' },
    { name: 'William German', email: 'wilson@gmail.com', password: 'germanpassword', phone_number: '9514512371' },
    { name: 'Ian Holsteen', email: 'djian@gmail.com', password: 'yourfavdj', phone_number: '9512220101' },
    { name: 'Adrian Barba', email: 'abarba123@gmail.com', password: 'adbarb765', phone_number: '9098137041' },
    { name: 'Robert Lee', email: 'golfislife@gmail.com', password: 'tigerwoods14', phone_number: '7189021602' },
    { name: 'John Josef', email: 'jojo@gmail.com', password: 'tobifobi', phone_number: '9516663401' },
  ],
)

puts '🍪 Seeding bookings...'
u = User.all.sample
e = Event.all.sample
Booking.create(
    [
        { location: "Los Angeles", datetime: "01/01/23", user: u, event: e, price: rand(2..10) * 50 },
        { location: "San Diego", datetime: "02/15/23", user: u, event: e, price: rand(2..10) * 50 },
        { location: "Irvine", datetime: "03/05/23", user: u, event: e, price: rand(2..10) * 50 },
        { location: "Santa Barbara", datetime: "04/12/23", user: u, event: e, price: rand(2..10) * 50 },
        { location: "Dana Point", datetime: "06/24/23", user: u, event: e, price: rand(2..10) * 50 },
        { location: "Cancun", datetime: "07/20/23", user: u, event: e, price: rand(2..10) * 50 },
        { location: "Cabo San Lucas", datetime: "08/12/23", user: u, event: e, price: rand(2..10) * 50 },
    ],
)
puts '🍪 Seeding products...'
Product.create(
    [
        { name: "Blue Full Voile Turban", price: 31.99, image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwddCrJEjvjs-WDVcCGdVSVa7QPaB-1UWdLg&usqp=CAU"},
        { name: "Maroon Full Voile Turban", price: 29.99, image_url: "https://www.ehutty.com/wp-content/uploads/2017/04/Voile-Maroon-R001-600x600.jpg"},
        { name: "Mint Green Full Voile Turban", price: 27.99, image_url: "https://www.ehutty.com/wp-content/uploads/2017/04/Offwhite-Green-G004.jpg"},
        { name: "Black Full Voile Turban", price: 29.99, image_url: "https://www.ehutty.com/wp-content/uploads/2017/04/Madhurani-Black.jpg"},
        { name: "Yellow Full Voile Turban", price: 24.99, image_url: "https://www.ehutty.com/wp-content/uploads/2017/04/Yellow-Voile-Y003-600x600.jpg"},
        { name: "Light Brown Full Voile Turban", price: 29.99, image_url: "https://www.ehutty.com/wp-content/uploads/2017/04/Light-Brown-BM003.jpg"},
        { name: "Safa Style Turban", price: 39.99, image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKVO1olFwkz0UQv-MJQiIpuLdHpJvh39W1JQ&usqp=CAU"},
    ],
)
puts '🍪 Seeding purchases...'
p = Product.all.sample
Purchase.create(
    [
        { quantity: 1, user: u, product: p },
        { quantity: 10, user: u, product: p },
        { quantity: 5, user: u, product: p },
        { quantity: 3, user: u, product: p },
        { quantity: 7, user: u, product: p },
        { quantity: 15, user: u, product: p },
        { quantity: 50, user: u, product: p },
    ],
)

puts '🍪 Done seeding!'

# Event.all.each do |event|
#   rand(2..4).times do
#     # get a random sweet
#     user = User.all.sample

#     Booking.create!(
#       user_id: user.id,
#       event_id: event.id,
#       datetime: "20/20/2022",
#       location: "location",
#       price: rand(2..10) * 50
#     )
#   end
# end
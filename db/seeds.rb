# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# # Users
User.create(first_name: 'Taylor',
  last_name: 'Wong',
  email: "tay@tay.com",
  password: "password",
  birthday: "1993-10-31",
  gender: "male",
  profile_img_url: "http://res.cloudinary.com/trwong/image/upload/v1511898505/download_1_fduexc.jpg",
  cover_img_url: "http://res.cloudinary.com/trwong/image/upload/v1511898507/zion_national_park_springdale_utah_05_urgaqg.jpg")
# User.create(first_name: 'Karim', last_name: 'Key', email: "test1", password: "password", birthday: "1993-10-31", gender: "male")
# User.create(first_name: 'Jahar', last_name: 'Peele', email: "test2", password: "password", birthday: "1993-10-31", gender: "male")
# User.create(first_name: 'Bob', last_name: 'Belcher', email: "test3", password: "password", birthday: "1993-10-31", gender: "male")
# User.create(first_name: 'Tina', last_name: 'Belcher', email: "test4", password: "password", birthday: "1993-10-31", gender: "male")

# # Posts
# Post.create(body: "post 1 to user 5 by Taylor", author_id: 1, recipient_id: 5)
# Post.create(body: "post 2 to user 4 by Karim", author_id: 2, recipient_id: 4)
# Post.create(body: "post 3 to user 2 by Jahar", author_id: 3, recipient_id: 2)
# Post.create(body: "post 4 to user 3 by Bob", author_id: 4, recipient_id: 3)
# Post.create(body: "post 5 to user 4 by Tina", author_id: 5, recipient_id: 4)
# Post.create(body: " that is a spicy meatball", author_id: 5, recipient_id: 1)
# Post.create(body: "hmmmmmmhmmmm so good and tasty", author_id: 5, recipient_id: 1)

# # Comments
# Comment.create(body: "comment 1 on post 1 by Taylor", author_id: 1, post_id: 1)
# Comment.create(body: "comment 2 on post 1 by Karim", author_id: 2, post_id: 1)
# Comment.create(body: "comment 3 on post 1 by Jahar", author_id: 3, post_id: 1)
# Comment.create(body: "comment 4 on post 1 by Bob", author_id: 4, post_id: 1)
# Comment.create(body: "comment 5 on post 1 by Tina", author_id: 5, post_id: 1)
# Comment.create(body: "Engage Docking Vore Protocol", author_id: 4, post_id: 7)
# Comment.create(body: "Butt as a service", author_id: 3, post_id: 7)

# Users
genderArr = ["male", "female"]

Faker::UniqueGenerator.clear

20.times do
  faker_name = Faker::GameOfThrones.character
  first_name = faker_name.split.first
  last_name = faker_name.split[1..-1].join
  email = Faker::Internet.unique.email
  password = "password"
  birthday = Faker::Date.birthday(18, 65)
  gender = genderArr[Random.rand(2)]
  User.create(first_name: first_name, last_name: last_name, email: email, password: password, birthday: birthday, gender: gender)
end

50.times do
  author_id = Random.rand(User.all.count) + 1
  recipient_id = Random.rand(User.all.count) + 1
  until recipient_id != author_id
    recipient_id = Random.rand(User.all.count) + 1
  end
  body = Faker::ChuckNorris.fact
  body.count("Chuck Norris").times{ body.sub!("Chuck Norris", "#{User.find(recipient_id).first_name} #{User.find(recipient_id).last_name}") }
  Post.create(body: body, author_id: author_id, recipient_id: recipient_id)
end

100.times do
  body = Faker::MostInterestingManInTheWorld.quote
  author_id = Random.rand(User.all.count) + 1
  post_id = Random.rand(Post.all.count) + 1
  Comment.create(body: body, author_id: author_id, post_id: post_id)
end

Friend.create(requestor_id: 1, receiver_id: 2, status: "accepted")
Friend.create(requestor_id: 3, receiver_id: 1, status: "pending")
Friend.create(requestor_id: 1, receiver_id: 4, status: "accepted")
Friend.create(requestor_id: 5, receiver_id: 1, status: "accepted")
Friend.create(requestor_id: 1, receiver_id: 6, status: "pending")
Friend.create(requestor_id: 1, receiver_id: 7, status: "denied")

Friend.create(requestor_id: 8, receiver_id: 1, status: "denied")
Friend.create(requestor_id: 10, receiver_id: 1, status: "pending")
Friend.create(requestor_id: 9, receiver_id: 1, status: "pending")

Friend.create(requestor_id: 4, receiver_id: 6, status: "pending")

Friend.create(requestor_id: 2, receiver_id: 9, status: "accepted")
Friend.create(requestor_id: 3, receiver_id: 10, status: "pending")

200.times do
  rand1 = Random.rand(User.all.count) + 1
  rand2 = Random.rand(User.all.count) + 1
  until rand1 != rand2
    rand2 = Random.rand(User.all.count) + 1
  end

  unless (Friend.find_by(requestor_id: rand1, receiver_id: rand2) || Friend.find_by(requestor_id: rand2, receiver_id: rand1))
    Friend.create(requestor_id: rand1, receiver_id: rand2, status: "accepted")
  end
end
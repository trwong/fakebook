# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Users
User.create(first_name: 'Taylor', last_name: 'Wong', email: "tay@tay.com", password: "password", birthday: "1993-10-31", gender: "male")
User.create(first_name: 'Karim', last_name: 'Key', email: "test1", password: "password", birthday: "1993-10-31", gender: "male")
User.create(first_name: 'Jahar', last_name: 'Peele', email: "test2", password: "password", birthday: "1993-10-31", gender: "male")
User.create(first_name: 'Bob', last_name: 'Belcher', email: "test3", password: "password", birthday: "1993-10-31", gender: "male")
User.create(first_name: 'Tina', last_name: 'Belcher', email: "test4", password: "password", birthday: "1993-10-31", gender: "male")

# Posts
Post.create(body: "post 1 by Taylor", author_id: 1)
Post.create(body: "post 2 by Karim", author_id: 2)
Post.create(body: "post 3 by Jahar", author_id: 3)
Post.create(body: "post 4 by Bob", author_id: 4)
Post.create(body: "post 5 by Tina", author_id: 5)
Post.create(body: " that is a spicy meatball", author_id: 5)
Post.create(body: "hmmmmmmhmmmm so good and tasty", author_id: 5)
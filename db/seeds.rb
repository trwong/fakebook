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
Post.create(body: "post 1 to user 5 by Taylor", author_id: 1, recipient_id: 5)
Post.create(body: "post 2 to user 4 by Karim", author_id: 2, recipient_id: 4)
Post.create(body: "post 3 to user 2 by Jahar", author_id: 3, recipient_id: 2)
Post.create(body: "post 4 to user 3 by Bob", author_id: 4, recipient_id: 3)
Post.create(body: "post 5 to user 4 by Tina", author_id: 5, recipient_id: 4)
Post.create(body: " that is a spicy meatball", author_id: 5, recipient_id: 1)
Post.create(body: "hmmmmmmhmmmm so good and tasty", author_id: 5, recipient_id: 1)

# Comments
Comment.create(body: "comment 1 on post 1 by Taylor", author_id: 1, post_id: 1)
Comment.create(body: "comment 2 on post 1 by Karim", author_id: 2, post_id: 1)
Comment.create(body: "comment 3 on post 1 by Jahar", author_id: 3, post_id: 1)
Comment.create(body: "comment 4 on post 1 by Bob", author_id: 4, post_id: 1)
Comment.create(body: "comment 5 on post 1 by Tina", author_id: 5, post_id: 1)
Comment.create(body: "Engage Docking Vore Protocol", author_id: 4, post_id: 7)
Comment.create(body: "Butt as a service", author_id: 3, post_id: 7)
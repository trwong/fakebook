# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


headshot_arr = [
  "https://res.cloudinary.com/trwong/image/upload/v1512165315/christopher-campbell-28567_mqlwnp.jpg",
  "https://res.cloudinary.com/trwong/image/upload/v1512165316/michael-dam-258165_xozcje.jpg",
  "https://res.cloudinary.com/trwong/image/upload/v1512165315/ryan-holloway-261284_qqmizu.jpg",
  "https://res.cloudinary.com/trwong/image/upload/v1512165320/erik-lucatero-310633_wx4zhf.jpg",
  "https://res.cloudinary.com/trwong/image/upload/v1512165314/lucas-sankey-378674_srcc3x.jpg",
  "https://res.cloudinary.com/trwong/image/upload/v1512165314/alexandru-zdrobau-98438_bbq3fk.jpg",
  "https://res.cloudinary.com/trwong/image/upload/v1512165312/malvestida-magazine-295605_qzddzg.jpg",
  "https://res.cloudinary.com/trwong/image/upload/v1512165313/joe-gardner-149699_qcvzbd.jpg",
  "https://res.cloudinary.com/trwong/image/upload/v1512165313/matheus-ferrero-216385_jeg69t.jpg",
  "https://res.cloudinary.com/trwong/image/upload/v1512165311/els-fattah-371118_zu7owm.jpg",
  "https://res.cloudinary.com/trwong/image/upload/v1512165310/swaraj-tiwari-126808_ejn6xe.jpg",
  "https://res.cloudinary.com/trwong/image/upload/v1512165312/audrey-m-jackson-260657_a8uuag.jpg",
  "https://res.cloudinary.com/trwong/image/upload/v1512165311/jared-sluyter-260692_sgrzcl.jpg",
  "https://res.cloudinary.com/trwong/image/upload/v1512165309/aatik-tasneem-138230_mlanio.jpg",
  "https://res.cloudinary.com/trwong/image/upload/v1512165308/eric-froehling-311481_jn3lz9.jpg",
  "https://res.cloudinary.com/trwong/image/upload/v1512165307/usama-377336_zuzeyl.jpg",
  "https://res.cloudinary.com/trwong/image/upload/v1512165309/joseph-gonzalez-399972_lwyqdh.jpg",
  "https://res.cloudinary.com/trwong/image/upload/v1512165313/donald-teel-349294_ansoh4.jpg",
  "https://res.cloudinary.com/trwong/image/upload/v1512165308/berwin-coroza-340444_n2sni5.jpg",
  "https://res.cloudinary.com/trwong/image/upload/v1512165310/kyu-lee-387624_sw9du5.jpg"
]

coverpic_arr = [
  "https://res.cloudinary.com/trwong/image/upload/v1512165736/willian-west-346731_voh9xu.jpg",
  "https://res.cloudinary.com/trwong/image/upload/v1512165738/prometey-sanchez-noskov-340992_acmcgy.jpg",
  "https://res.cloudinary.com/trwong/image/upload/v1512165738/joel-filipe-191372_w0jzo5.jpg",
  "https://res.cloudinary.com/trwong/image/upload/v1512165738/pedro-lastra-157071_zgha8w.jpg",
  "https://res.cloudinary.com/trwong/image/upload/v1512165738/yeshi-kangrang-342857_xh1nxh.jpg",
  "https://res.cloudinary.com/trwong/image/upload/v1512165740/thomas-habr-185321_e37qxn.jpg",
  "https://res.cloudinary.com/trwong/image/upload/v1512165738/pawel-nolbert-291146_knzg8q.jpg",
  "https://res.cloudinary.com/trwong/image/upload/v1512165742/anthony-delanoix-8433_kyrpxb.jpg",
  "https://res.cloudinary.com/trwong/image/upload/v1512165740/eric-carlson-335197_x2iv2r.jpg",
  "https://res.cloudinary.com/trwong/image/upload/v1512165742/sebastian-unrau-31677_yv2smy.jpg",
  "https://res.cloudinary.com/trwong/image/upload/v1512165743/michal-kmet-257136_ct42ep.jpg",
  "https://res.cloudinary.com/trwong/image/upload/v1512165741/irene-davila-329992_fdmjqs.jpg",
  "https://res.cloudinary.com/trwong/image/upload/v1512165743/michal-parzuchowski-40545_kihkkp.jpg",
  "https://res.cloudinary.com/trwong/image/upload/v1512165743/billy-williams-262740_mejlkv.jpg",
  "https://res.cloudinary.com/trwong/image/upload/v1512165749/pietro-de-grandi-329892_rainpv.jpg",
  "https://res.cloudinary.com/trwong/image/upload/v1512165745/daniel-roe-30147_vowads.jpg"
]

User.create(first_name: 'Taylor',
  last_name: 'Wong',
  email: "tay@tay.com",
  password: "password",
  birthday: "1993-10-31",
  gender: "male",
  profile_img_url: "https://res.cloudinary.com/trwong/image/upload/v1512000606/download_1_ec1e6x.jpg",
  cover_img_url: "https://res.cloudinary.com/trwong/image/upload/v1511898507/zion_national_park_springdale_utah_05_urgaqg.jpg")
genderArr = ["male", "female"]

Faker::UniqueGenerator.clear
i = 0
30.times do
  faker_name = Faker::GameOfThrones.character
  first_name = faker_name.split.first
  last_name = faker_name.split[1..-1].join
  email = Faker::Internet.unique.email
  password = "password"
  birthday = Faker::Date.birthday(18, 65)
  gender = genderArr[Random.rand(2)]
  profile_img_url = headshot_arr[i % headshot_arr.length]
  cover_img_url = coverpic_arr[i % headshot_arr.length]
  i += 1
  User.create(first_name: first_name, last_name: last_name, email: email, password: password, birthday: birthday, gender: gender, profile_img_url: profile_img_url, cover_img_url: cover_img_url)
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

300.times do
  rand1 = Random.rand(User.all.count) + 1
  rand2 = Random.rand(User.all.count) + 1
  until rand1 != rand2
    rand2 = Random.rand(User.all.count) + 1
  end

  unless (Friend.find_by(requestor_id: rand1, receiver_id: rand2) || Friend.find_by(requestor_id: rand2, receiver_id: rand1))
    Friend.create(requestor_id: rand1, receiver_id: rand2, status: "accepted")
  end
end
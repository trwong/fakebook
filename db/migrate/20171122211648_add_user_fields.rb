class AddUserFields < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :first_name, :string, null: false
    add_column :users, :last_name, :string, null:false
    add_column :users, :birthday, :date, null:false
    add_column :users, :gender, :string, null:false
    add_column :users, :profile_img_url, :string, default: "https://res.cloudinary.com/trwong/image/upload/v1511818535/600px-Default_profile_picture__male__on_Facebook_wmo7hc.jpg"
    add_column :users, :cover_img_url, :string, default: "https://res.cloudinary.com/trwong/image/upload/v1511820122/black_shop_hotvdp.jpg"
  end
end

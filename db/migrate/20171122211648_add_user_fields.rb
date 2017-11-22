class AddUserFields < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :first_name, :string, null: false
    add_column :users, :last_name, :string, null:false
    add_column :users, :birthday, :date, null:false
    add_column :users, :gender, :string, null:false
    add_column :users, :profile_img_url, :string
    add_column :users, :cover_img_url, :string
  end
end

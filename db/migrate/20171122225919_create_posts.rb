class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      t.text :body, null: false
      t.integer :author_id, null: false
      t.integer :recipient_id

      t.timestamps
    end
    add_index :posts, :author_id
    add_index :posts, :recipient_id

  end
end

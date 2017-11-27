class Post < ApplicationRecord
  validates :body, :author_id, presence: true

  belongs_to :user,
    foreign_key: :author_id,
    class_name: :User
  
  has_many :comments,
    foreign_key: :post_id,
    class_name: :Comment
end

class Post < ApplicationRecord
  validates :body, :author_id, presence: true

  belongs_to :user,
    foreign_key: :author_id,
    class_name: :User
  
end

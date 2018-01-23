class Comment < ApplicationRecord
  validates :body, :author_id, :post_id, presence: true

  belongs_to :user,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User,
    dependent: :destroy


  belongs_to :post,
    primary_key: :id,
    foreign_key: :post_id,
    class_name: :Post,
    inverse_of: :comments,
    dependent: :destroy

  has_many :likes,
    as: :likeable
end

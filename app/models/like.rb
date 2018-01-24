class Like < ApplicationRecord
  validates_uniqueness_of :liker_id, scope: [:likeable_id, :likeable_type]
  
  belongs_to :likeable,
    polymorphic: true

  has_one :user,
    class_name: :User,
    primary_key: :liker_id,
    foreign_key: :id
end

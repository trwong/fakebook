class Post < ApplicationRecord
  validates :body, :author_id, presence: true
  
end

class Friend < ApplicationRecord
  validates :requestor_id, :receiver_id, :status, presence: true
  validates :requestor_id, uniqueness: { scope: :receiver_id }
  validates :status, inclusion: { in: %w(pending accepted denied) }
  
  # TODO review below associations
  belongs_to :requestor,
    primary_key: :id,
    foreign_key: :requestor_id,
    class_name: :User
    
  belongs_to :receiver,
    primary_key: :id,
    foreign_key: :receiver_id,
    class_name: :User

end

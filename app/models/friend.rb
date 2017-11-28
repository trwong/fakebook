class Friend < ApplicationRecord
  validates :requestor_id, :receiver_id, :status, presence: true
  validates :requestor_id, uniqueness: { scope: :receiver_id }
  validates :status, inclusion: { in: %w(pending accepted denied) }
  
  # belongs_to :
end

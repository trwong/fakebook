class User < ApplicationRecord
  validates :email, :session_token, presence: true, uniqueness: true
  validates :password_digest, :first_name, :last_name, :birthday, :gender, presence: true
  validates :password, length: { minimum: 6 }, allow_nil: true
  validates :gender, inclusion: { in: %w(male female) }

  attr_reader :password

  after_initialize :ensure_session_token

  has_many :posts,
    foreign_key: :author_id,
    class_name: :Post,
    dependent: :destroy

  has_many :comments,
    foreign_key: :author_id,
    class_name: :Comment,
    dependent: :destroy


  # TODO review below 4 associations
  has_many :requested_friendships,
    primary_key: :id,
    foreign_key: :requestor_id,
    class_name: :Friend

  has_many :received_friendships,
    primary_key: :id,
    foreign_key: :receiver_id,
    class_name: :Friend

  has_many :requested_friends,
    through: :requested_friendships,
    source: :receiver

  has_many :received_friends,
    through: :received_friendships,
    source: :requestor

  def self.searchNames(query)
    sql_query = "%" + query + "%"
    User
      .where('lower(first_name) LIKE ? OR lower(last_name) LIKE ?', sql_query, sql_query)
      .limit(5)
  end
    
  def all_friends
    self.requested_friends + self.received_friends
  end

  def outgoing_pending_friends
    self.requested_friends.where("status = 'pending'")
  end

  def outgoing_pending_friends_ids
    outgoing_pending_friends
      .map{ |friend| friend.id }
  end

  def incoming_pending_friends
    self.received_friends.where("status = 'pending'")
  end

  def incoming_pending_friends_ids
    incoming_pending_friends
      .sort_by{ |friend| friend.created_at }
      .reverse
      .map{ |friend| friend.id }
  end

  def accepted_friends
    self.requested_friends.where("status = 'accepted'") +
      self.received_friends.where("status = 'accepted'")
  end

  def accepted_friends_ids
    accepted_friends.map{ |friend| friend.id }
  end

  def denied_friends
    self.requested_friends.where("status = 'denied'") +
      self.received_friends.where("status = 'denied'")
  end

  def friendship_status(other_user_id)
    Friend.find_by(requestor_id: self.id, receiver_id: other_user_id)&.status || 
      Friend.find_by(requestor_id: other_user_id, receiver_id: self.id)&.status
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token = SecureRandom.urlsafe_base64
  end

  def reset_session_token
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    if user && user.is_password?(password)
      return user
    end
    nil
  end
end

json.set! @user.id do
  created_at = @user.created_at.in_time_zone("Pacific Time (US & Canada)").strftime("%b %e at %l:%M%P")
  json.extract! @user, :email, :id, :first_name, :last_name, :birthday, :gender, :profile_img_url, :cover_img_url
  json.friends @user.accepted_friends_ids
  json.friend_requests @user.incoming_pending_friends_ids
  json.created_at created_at
end
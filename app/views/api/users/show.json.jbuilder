json.partial! 'api/users/user', user: @user

# json.set! @user.id do
# json.extract!
#   user,
#   :email,
#   :id,
#   :first_name,
#   :last_name,
#   :birthday,
#   :gender,
#   :profile_img_url,
#   :cover_img_url,
#   :created_at
# end
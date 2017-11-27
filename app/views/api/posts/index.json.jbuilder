# json.array! @posts do |post|
#   json.partial! 'api/posts/post', post: post
# end

sorted_posts = @posts.sort_by { |post| post.created_at }.reverse

sorted_post_ids = sorted_posts.map { |post| post.id }

# user_id_array = []

# json.posts do
json.by_id do
  @posts.each do |post|
    json.set! post.id do
      # user_id_array << post.author_id
      json.extract! post, :id, :body, :author_id, :recipient_id, :created_at
      json.comments post.comments
        .sort_by { |comment| comment.created_at }
        .map { |comment| comment.id }
    end
  end
end

json.all_ids sorted_post_ids
# end

# user_id_array.uniq!

json.users do
  @users.each do |user|
    json.set! user.id do
      json.extract! user, :id, :email, :first_name, :last_name, :profile_img_url
    end
  end
end
if @like.likeable_type == "Post"
  post = Post.find(@like.likeable_id)
  json.num_likes Like.where(likeable_type: 'Post', likeable_id: post.id).count
  json.liker_ids Like.where(likeable_type: 'Post', likeable_id: post.id).pluck(:liker_id)
  json.current_user_likes Like.exists?(likeable_type: 'Post', likeable_id: post.id, liker_id: current_user.id)
elsif @like.likeable_type == "Comment"

end

json.liker_id @like.liker_id
json.likeable_type @like.likeable_type
json.likeable_id @like.likeable_id


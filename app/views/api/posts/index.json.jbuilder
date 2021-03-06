sorted_posts = @posts.sort_by { |post| post.created_at }.reverse

sorted_post_ids = sorted_posts.map { |post| post.id }

user_id_array = []
comment_id_array = []

json.by_id do
  # if @posts.empty?
  #   return {}
  # else
    @posts.each do |post|
      user_id_array << post.author_id
      user_id_array << post.recipient_id if post.recipient_id
      post.comments.each do |comment|
        user_id_array << comment.author_id
        comment_id_array << comment.id
      end
      created_at = post.created_at.in_time_zone("Pacific Time (US & Canada)").strftime("%b %e at %l:%M%P")
      json.set! post.id do
        json.extract! post, :id, :body, :author_id, :recipient_id
        json.created_at created_at
        json.comments post.comments
          .sort_by { |comment| comment.created_at }
          .map { |comment| comment.id }
        json.num_likes Like.where(likeable_type: 'Post', likeable_id: post.id).count
        json.liker_ids Like.where(likeable_type: 'Post', likeable_id: post.id).pluck(:liker_id)
        json.current_user_likes Like.exists?(likeable_type: 'Post', likeable_id: post.id, liker_id: current_user.id)
      end
    end
  # end
end

json.all_ids sorted_post_ids

user_id_array.uniq!
comment_id_array.uniq!

json.users do
  user_id_array.each do |userId|
    searchUser = User.find(userId)
    json.set! userId do
      json.extract! searchUser, :id, :email, :first_name, :last_name, :profile_img_url
    end
  end
end

json.comments do
  comment_id_array.each do |commentId|
    searchComment = Comment.find(commentId)
    created_at = searchComment.created_at.in_time_zone("Pacific Time (US & Canada)").strftime("%b %e at %l:%M%P")
    json.set! commentId do
      json.extract! searchComment, :id, :body, :author_id, :post_id
      json.created_at created_at
    end
  end
end

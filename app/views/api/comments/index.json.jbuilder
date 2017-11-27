sorted_comments = @comments.sort_by { |comment| comment.created_at }

sorted_comment_ids = sorted_comments.map { |comment|comment.id }

json.by_id do
  @comments.each do |comment|
    json.set! comment.id do
      json.extract! comment, :id, :body, :author_id, :post_id, :created_at
    end
  end
end

json.all_ids sorted_comment_ids

json.users do
  @users.each do |user|
    json.set! user.id do
      json.extract! user, :id, :email, :first_name, :last_name, :profile_img_url
    end
  end
end
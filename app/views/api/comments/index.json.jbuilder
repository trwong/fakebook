@comments.each do |comment|
  created_at = comment.created_at.in_time_zone("Pacific Time (US & Canada)").strftime("%b %e at %l:%M%P")
  json.set! comment.id do
    json.extract! comment, :id, :body, :author_id, :post_id
    json.created_at created_at
  end
end
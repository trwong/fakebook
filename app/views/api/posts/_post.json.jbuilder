created_at = post.created_at.in_time_zone("Pacific Time (US & Canada)").strftime("%b %e at %l:%M%P")
json.extract! post, :id, :body, :author_id, :recipient_id
json.created_at created_at

# TODO2 add ruby logic to parse created_at to something human readable



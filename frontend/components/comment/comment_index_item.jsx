import React from 'react';
import { Link } from 'react-router-dom';

class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { commentId, posts } = this.props;
    let { all_ids, by_id, comments, users } = posts;
    let comment = comments[commentId];

    return (
    <div className="comment-index-item">

      <div className="profile-thumbnail-container">
        <img
          className="profile-thumbnail-small-circle"
          src={users[comment.author_id].profile_img_url}
          alt="user profile thumbnail"/>
      </div>

      <div className="comment-name-body-date">
        <Link
          className="comment-item-profile-link"
          to={`/profile/${comment.author_id}`}>
          <span
            className="comment-item-author-name"
          >{users[comment.author_id].first_name} {users[comment.author_id].last_name}</span>
        </Link>
        <span>{comment.body}</span>
        <div className="comment-item-date">
          { comment.created_at }
        </div>

      </div>
    </div>
    );
  }
}

export default CommentIndexItem;
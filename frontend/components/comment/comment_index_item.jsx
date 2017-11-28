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
    {/* commenting out for now */}
      {/* <img src={users[comment.author_id].profile_img_url} alt=""/> */}
      <span>{users[comment.author_id].first_name} {users[comment.author_id].last_name}</span>
      <span>{comment.body}</span>
    </div>
    );
  }
}

export default CommentIndexItem;
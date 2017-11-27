import React from 'react';
import CommentIndexItemContainer from './comment_index_item_container';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      commentsArr: this.props.posts.by_id[this.props.postId].comments,
    };
  }

  render() {
    return (
    <div className="comment-index-container">
      {
        // this.state.commentsArr.map( commentId => (
        //   <CommentIndexItemContainer
        //     commentId={commentId}
        //     key={commentId} />
        // ))
      }
    </div>
    );
  }
}

export default CommentIndex;
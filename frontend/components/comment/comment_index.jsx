import React from 'react';
import CommentIndexItemContainer from './comment_index_item_container';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div className="comment-index-container">
      Comment Index
      <CommentIndexItemContainer />
    </div>
    );
  }
}

export default CommentIndex;
import React from 'react';
import CommentIndexContainer from './comment_index_container';
import CommentFormContainer from './comment_form_container';

class Comment extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div className="comment-container">
      Comments Container
      <CommentIndexContainer />
      <CommentFormContainer />
    </div>
    );
  }
}

export default Comment;
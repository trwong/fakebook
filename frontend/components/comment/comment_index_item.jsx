import React from 'react';

class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // let comment;
    // let user_id;
    // let body;
    // if (this.props.commentId) {
    //   comment = this.props.comments[this.props.commentId];
    //   user_id = comment.user_id;
    //   body = comment.body;
    // }

    return (
    <div className="comment-index-item">
      <img src="" alt=""/>
      {/* <span value={user_id}></span>
      <span value={body}></span> */}
    </div>
    );
  }
}

export default CommentIndexItem;
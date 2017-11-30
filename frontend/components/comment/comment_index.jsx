import React from 'react';
import CommentIndexItemContainer from './comment_index_item_container';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = props;
    // commentsArr: this.props.posts.by_id[this.props.postId].comments,
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps);
  }

  render() {
    let commentsArr = this.state.posts.by_id[this.props.postId].comments;

    let commentsMap = commentsArr ? (
      commentsArr.map( commentId => (
          <CommentIndexItemContainer
            comment={this.state.posts.comments[commentId]}
            key={commentId} />
        ))
    ) : ("");

    return (
    <div className="comment-index-container">
      { commentsMap }
    </div>
    );
  }
}

export default CommentIndex;
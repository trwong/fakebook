import React from 'react';

class FeedLikeDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { liker_ids, current_user_likes, num_likes } = this.props.post;

    if (num_likes === 0) {
      return null;
    }

    return (
      <div className="feed-like-display">
        <i
          className="fa fa-thumbs-up fa-1 feed-like-thumb"
          id="small-like-thumb"
          aria-hidden="true"></i>
        <span className="num-likes">
          {`${num_likes}`}
        </span>
      </div>
    );
  }
}

export default FeedLikeDisplay;
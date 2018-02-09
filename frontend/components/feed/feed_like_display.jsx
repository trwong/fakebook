import React from 'react';

class FeedLikeDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  getName(id) {
    let { users } = this.props;
    return users[parseInt(id)].first_name + " " + users[parseInt(id)].last_name;
  }

  render() {
    let {
        liker_ids,
        current_user_likes,
        num_likes,
      } = this.props.post;
    let display;
    
    switch (num_likes) {
      case 0:
        return null;

      case undefined:
        return null;

      case 1:
        display = (
          <span>
            {`${this.getName(liker_ids[0]) }`}
          </span>
        );
        break;

      case 2:
        display = (
          <span>
            {`${this.getName(liker_ids[0])} and ${this.getName(liker_ids[1])}`}
          </span>
        );
        break;
        
      case 3:
        display = (
          <span>
            {`${this.getName(liker_ids[0])}, ${this.getName(liker_ids[1])}, and ${this.getName(liker_ids[2])}`}
          </span>
        );
        break;
        
      default:
        display = (
          <span>
            {`${this.getName(liker_ids[0])}, ${this.getName(liker_ids[1])}, and ${num_likes - 2} others`}
          </span>
        );
        break;
        
    }

    return (
      <div className="feed-like-display">
        <i
          className="fa fa-thumbs-up fa-1 feed-like-thumb"
          id="small-like-thumb"
          aria-hidden="true"></i>
        <span className="num-likes">
          { display }
        </span>
      </div>
    );
  }
}

export default FeedLikeDisplay;
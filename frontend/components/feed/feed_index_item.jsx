import React from 'react';
import { Link } from 'react-router-dom';

class FeedIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.user = this.props.fetchUser(this.props.post.author_id);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.post.author_id);
  }

  render() {
    const { post, users } = this.props;
    return (
      <div className="feed-item-container">
        {/* TODO1 fix link "to" once profiles are made */}
        <div className="feed-item-header">
          <img 
            className="profile-thumbnail-medium-circle"
            src="/assets/karim.png"
            alt="profile picture thumbnail"/>
          <span className="feed-item-header-info">
          {/* TODO1 update to link once profiles are built */}
            <Link
              to="/feed"
              className="feed-item-profile-link"
              ><span
                className="feed-item-profile-name"
                >{users.first_name} {users.last_name}</span></Link>
            <span>{post.created_at}</span>
          </span>
        </div>
        
        <br />
        {post.body}
      </div>
    );
  }

}
export default FeedIndexItem;
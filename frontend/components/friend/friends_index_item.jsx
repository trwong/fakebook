import React from 'react';
import { Link } from 'react-router-dom';

class FriendsIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { user } = this.props;
    if (!user) {
      return null;
    }
    let { profile_img_url, first_name, last_name, id, friends } = user;
    let friendCount = friends.length;
    
    return (
      <div className="friends-index-item">
        <Link to={`/profile/${id}`}>
          <img
            className="friends-index-item-profile-picture"
            src={ profile_img_url }
            alt="profile image thumbnail"/>
          <div className="friends-index-item-content">

            <div className="friends-index-item-name-count">
              <span
                className="friends-index-item-friend-name"
                >{first_name} {last_name}</span>
                <span
                  className="friends-index-item-friend-count"
                  >{friendCount} Friends</span>
            </div>

            <button
              className="friends-index-item-button"
              ><i class="fa fa-check" aria-hidden="true"></i> Friends</button>
          </div>
        </Link>
      </div>
    );
  }
}

export default FriendsIndexItem;
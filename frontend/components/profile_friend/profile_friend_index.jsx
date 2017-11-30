import React from 'react';
import ProfileFriendIndexItemContainer from './profile_friend_index_item_container';
import { Link } from 'react-router-dom';

class ProfileFriendIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { users } = this.props;
    let profileUser = users[this.props.match.params.userId];
    let { friends } = profileUser;
    let firstNineFriends;

    if (friends) {
      firstNineFriends = friends.slice(0, 9);
    }

    let display = (firstNineFriends && firstNineFriends.length > 0) ? (
      firstNineFriends.map((friendId) => (
        <ProfileFriendIndexItemContainer
          key={friendId}
          user={ users[friendId] } />
      ))
    ) : (
      <div>No Friends :(</div>
    );

    return (
      <div className="profile-friend-index">
        <div className="profile-friend-index-header">
          <Link
            className="profile-friend-link"
            to="/profile/">
            <i className="fa fa-users profile-friends-icon" aria-hidden="true"></i>
            <span
              className="profile-friends-header-text"
              >Friends</span>
          </Link>
          <span className="profile-friend-dot-container">
            <i className="fa fa-circle profile-circle-icon" aria-hidden="true"></i>
          </span>
          <span className="profile-friend-count">
            {friends ? friends.length : "0"}
          </span>
        </div>
        <div className="profile-friend-item-container">
          { display }
        </div>
      </div>
    );
  }
}

export default ProfileFriendIndex;
import React from 'react';
import ProfileFriendIndexContainer from './../profile_friend/profile_friend_index_container';

class ProfileLeftAside extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="profile-left-aside">
        <ProfileFriendIndexContainer />
      </div>
    );
  }
}

export default ProfileLeftAside;
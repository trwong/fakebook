import React from 'react';
import FeedContainer from './../feed/feed_container';
import ProfileDisplayContainer from './profile_display_container';
import ProfileLeftAsideContainer from './profile_left_aside_container';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        {/* <ProfileDisplayContainer /> */}
        <div className="profile-body-container">
          <ProfileLeftAsideContainer />
          <FeedContainer />
        </div>
      </div>
    );
  }
}


export default Profile;
import React from 'react';
import FeedContainer from './../feed/feed_container';
import ProfileDisplayContainer from './profile_display_container';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <ProfileDisplayContainer />
        {/* TODO2 Add placeholder container for left aside */}
        <FeedContainer />
      </div>
    );
  }
}


export default Profile;
import React from 'react';
import FriendsIndexContainer from './friends_index_container';

class Friends extends React.Component {
  constructor(props) {
    super(props);
    }

  render() {
    return (
      <div className="friends-container">
        <div className="friends-container-header">
          <img
            className="friends-page-header-friend-icon"
            src="http://res.cloudinary.com/trwong/image/upload/v1512084921/Screen_Shot_2017-11-30_at_3.34.14_PM_ma4i2e.png"
            alt="friends icon"/>
            <span className="friends-page-header-text">Friends</span>
        </div>
        <FriendsIndexContainer />
      </div>
    );
  }
}

export default Friends;
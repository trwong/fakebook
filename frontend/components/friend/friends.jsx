import React from 'react';
import FriendsIndexContainer from './friends_index_container';

class Friends extends React.Component {
  constructor(props) {
    super(props);
    }

  render() {
    return (
      <div className="friends-container">
        <div>friends header stuff</div>
        <FriendsIndexContainer />
      </div>
    );
  }
}

export default Friends;
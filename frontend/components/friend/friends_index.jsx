import React from 'react';
import FriendsIndexItemContainer from './friends_index_item_container';

class FriendsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  

  render() {
    let { profileUser, users } = this.props;
    // debugger;
    let display = (profileUser && profileUser.friends && profileUser.friends.length > 0) ? (
      profileUser.friends.map( friendId => (
        <FriendsIndexItemContainer
          key={friendId}
          user={users[friendId]}/>
      ))
    ) : (
      // TODO2 add styling for no friends
      <div>No Friends :(</div>
    );

    return (
      <span className="friends-index-container">
        { display }
      </span>
    );
  }
}

export default FriendsIndex;
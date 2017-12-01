import React from 'react';
import FriendRequestIndexItemContainer from './friend_request_index_item_container';


class FriendRequestIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { users, currentUser } = this.props;
    let friend_requests;

    let display = (currentUser &&
      currentUser.friend_requests &&
      currentUser.friend_requests.length > 0) ? (
      currentUser.friend_requests.map(friendId => (
        <FriendRequestIndexItemContainer
          user={users[friendId]}
          key={friendId} />
      ))
    ) : (
      <div className="no-new-requests-text">No New Requests</div>
    );

    return (
      <div className="friend-request-index">
        {display}
      </div>
    );
  }

}
export default FriendRequestIndexItem;
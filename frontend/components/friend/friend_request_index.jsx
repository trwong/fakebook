import React from 'react';
import FriendRequestIndexItemContainer from './friend_request_index_item_container';


class FriendRequestIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // debugger;
    let { users, friend_requests } = this.props;

    let display = (friend_requests && friend_requests.length > 0) ? (
      friend_requests.map(friendId => (
        <FriendRequestIndexItemContainer
          user={users[friendId]}
          key={friendId} />
      ))
    ) : (
      <div>No New Requests</div>
    );

    return (
      <div className="friend-request-index">
        {display}
      </div>
    );
  }

}
export default FriendRequestIndexItem;
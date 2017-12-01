import React from 'react';
import { connect } from 'react-redux';
import FriendRequestIndex from './friend_request_index';
import {
  fetchFriends,
  patchFriend,
  destroyFriend
} from './../../util/friend_utils';


const mapStateToProps = state => {
  return ({
    users: state.users,
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = dispatch => ({
  fetchFriends: userId => fetchFriends(userId),
  patchFriend: (receiverId, requestorId, status) => patchFriend(receiverId, requestorId, status),
  destroyFriend: (receiverId, requestorId) => destroyFriend(receiverId, requestorId),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(FriendRequestIndex);
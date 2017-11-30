import React from 'react';
import { connect } from 'react-redux';
import FriendRequestIndexItem from './friend_request_index_item';
import {
  patchFriend,
  destroyFriend
} from './../../util/friend_utils';
import {
  getCurrentUser
} from './../../actions/session';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  patchFriend: (receiverId, requestorId, status) => patchFriend(receiverId, requestorId, status),
  destroyFriend: (receiverId, requestorId) => destroyFriend(receiverId, requestorId),
  getCurrentUser: userId => dispatch(getCurrentUser(userId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(FriendRequestIndexItem);
import React from 'react';
import { connect } from 'react-redux';
import ProfileDisplay from './profile_display';
import { fetchUsers, fetchUser, updateUser } from './../../actions/user';
import { withRouter } from 'react-router-dom'; 
import { getCurrentUser } from "./../../actions/session";
import { postFriend, destroyFriend, patchFriend } from "./../../util/friend_utils";

const mapStateToProps = (state, ownProps) => {
  return ({
    currentUser: state.session.currentUser,
    // ownProps: ownProps,
    users: state.users,
  });
};

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers()),
  fetchUser: userId => dispatch(fetchUser(userId)),
  updateUser: user => dispatch(updateUser(user)),
  getCurrentUser: userId => dispatch(getCurrentUser(userId)),
  postFriend: (receiverId, requestorId) => postFriend(receiverId, requestorId),
  destroyFriend: (receiverId, requestorId) => destroyFriend(receiverId, requestorId),
  patchFriend: (receiverId, requestorId, status) => patchFriend(receiverId, requestorId, status),
});




export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileDisplay));
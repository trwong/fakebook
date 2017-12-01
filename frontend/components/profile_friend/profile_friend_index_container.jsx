import React from 'react';
import { connect } from 'react-redux';
import ProfileFriendIndex from './profile_friend_index';
import { withRouter } from 'react-router-dom';
import { fetchUsers } from './../../actions/user';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  users: state.users,
  profileUser: state.users[ownProps.match.params.userId],
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers()),
});




export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileFriendIndex));
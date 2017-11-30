import React from 'react';
import { connect } from 'react-redux';
import ProfileFriendIndex from './profile_friend_index';
import { withRouter } from 'react-router-dom';


const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  users: state.users,
});

const mapDispatchToProps = dispatch => ({

});




export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileFriendIndex));
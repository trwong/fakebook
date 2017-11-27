import React from 'react';
import { connect } from 'react-redux';
import ProfileDisplay from './profile_display';
import { fetchUsers, fetchUser, updateUser } from './../../actions/user';
import { withRouter } from 'react-router-dom'; 

const mapStateToProps = (state, ownProps) => {
  console.log("users in prof disp conta",state.users);
  return ({
    currentUser: state.session.currentUser,
    ownProps: ownProps,
    users: state.users,
  });
};

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers()),
  fetchUser: userId => dispatch(fetchUser(userId)),
  updateUser: user => dispatch(updateUser(user)),
});




export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileDisplay));
import React from 'react';
import { connect } from 'react-redux';
import ProfileDisplay from './profile_display';
import { fetchUser, updateUser } from './../../actions/user';
import { withRouter } from 'react-router-dom'; 

const mapStateToProps = (state, ownProps) => {
  console.log("mapStateToProps", state.session.currentUser);
  return ({
    profileUser: state.users[ownProps.match.params.userId],
    currentUser: state.session.currentUser,
  });
};

const mapDispatchToProps = dispatch => ({
  fetchUser: userId => dispatch(fetchUser(userId)),
  updateUser: user => dispatch(updateUser(user)),
});




export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileDisplay));
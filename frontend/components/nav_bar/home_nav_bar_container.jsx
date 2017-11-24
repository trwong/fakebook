import React from 'react';
import { connect } from 'react-redux';
import HomeNavBar from './home_nav_bar';
import { login } from './../../actions/session';

const mapStateToProps = state => {
  console.log("inside conatiner mapstatetoprops", state);
  return {
    currentUser: state.session.currentUser,
    errors: state.errors.session,
  };
};

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeNavBar);
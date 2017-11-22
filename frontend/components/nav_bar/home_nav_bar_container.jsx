import React from 'react';
import { connect } from 'react-redux';
import HomeNavBar from './home_nav_bar';
import { login } from './../../actions/session';

const mapStateToProps = state => {
  console.log(state);

  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeNavBar);
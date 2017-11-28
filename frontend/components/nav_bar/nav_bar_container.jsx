import React from 'react';
import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { logout } from './../../actions/session';
import { fetchUsers } from './../../actions/user';

const mapStateToProps = state => ({
  user: state.session.currentUser,
  posts: state.posts,
  users: state.users,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchUsers: () => dispatch(fetchUsers()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(NavBar);
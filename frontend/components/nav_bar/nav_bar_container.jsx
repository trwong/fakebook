import React from 'react';
import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { logout, getCurrentUser } from './../../actions/session';
import { fetchUsers } from './../../actions/user';
import { searchUsers } from './../../actions/search';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  posts: state.posts,
  users: state.users,
  search: state.search,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchUsers: () => dispatch(fetchUsers()),
  getCurrentUser: userId => dispatch(getCurrentUser(userId)),
  searchUsers: query => dispatch(searchUsers(query)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps)(NavBar));
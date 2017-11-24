import React from 'react';
import { connect } from 'react-redux';
import ProfileDisplay from './profile_display';
import { fetchUser } from './../../actions/user';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => ({
  fetchUser: userId => dispatch(fetchUser(userId)),
});




export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileDisplay));
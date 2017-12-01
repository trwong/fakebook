import React from 'react';
import { connect } from 'react-redux';
import LeftAside from './left_aside';


const mapStateToProps = state => ({
  users: state.users,
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(LeftAside);
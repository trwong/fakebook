import React from 'react';
import { connect } from 'react-redux';
import FriendsIndex from './friends_index';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  profileUser: state.users[ownProps.match.params.userId],
  users: state.users,
});

const mapDispatchToProps = dispatch => ({

});




export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendsIndex));
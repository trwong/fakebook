import React from 'react';
import { connect } from 'react-redux';
import FriendsIndex from './friends_index';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  user: state.users[ownProps.match.params.userId],
});

const mapDispatchToProps = dispatch => ({

});




export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendsIndex));
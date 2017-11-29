import React from 'react';
import { connect } from 'react-redux';
import FeedIndexItem from "./feed_index_item";

const mapStateToProps = state => ({
  users: state.users,
  // currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(FeedIndexItem);
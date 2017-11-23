import React from 'react';
import { connect } from 'react-redux';
import FeedIndexItem from "./feed_index_item";
import { fetchUser } from './../../actions/user';

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => ({
  fetchUser: userId => dispatch(fetchUser(userId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(FeedIndexItem);
import React from 'react';
import { connect } from 'react-redux';
import FeedIndexItem from "./feed_index_item";
import { editPost, destroyPost } from "./../../actions/post";

const mapStateToProps = state => ({
  users: state.users,
  // currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  editPost: post => dispatch(editPost(post)),
  destroyPost: postId => dispatch(destroyPost(postId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(FeedIndexItem);
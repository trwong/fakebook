import React from 'react';
import { connect } from 'react-redux';
import FeedIndex from './feed_index';
import { fetchPosts, editPost, destroyPost } from "./../../actions/post";
import { fetchUser } from "./../../actions/user";

const mapStateToProps = state => ({
  posts: state.posts,
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  editPost: post => dispatch(editPost(post)),
  destroyPost: postId => dispatch(destroyPost(postId)),
  fetchUser: userId => dispatch(fetchUser(userId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(FeedIndex);
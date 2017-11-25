import React from 'react';
import { connect } from 'react-redux';
import PostForm from './post_form';
import { createPost } from './../../actions/post';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  ownProps: ownProps,
  profileUser: state.users[ownProps.match.params.userId],
});

const mapDispatchToProps = dispatch => ({
  createPost: post => dispatch(createPost(post)),
});




export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm));
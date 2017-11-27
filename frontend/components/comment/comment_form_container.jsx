import React from 'react';
import { connect } from 'react-redux';
import CommentForm from './comment_form';
import { postComment } from './../../actions/comment';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  postComment: (postId, commentId) => dispatch(postComment(postId, commentId)),
});


export default connect( mapStateToProps, mapDispatchToProps)(CommentForm);
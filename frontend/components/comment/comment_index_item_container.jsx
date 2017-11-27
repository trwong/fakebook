import React from 'react';
import { connect } from 'react-redux';
import CommentIndexItem from './comment_index_item';

const mapStateToProps = state => ({
  comments: state.comments,
  users: state.users,
});

const mapDispatchToProps = dispatch => ({
});


export default connect( mapStateToProps, mapDispatchToProps)(CommentIndexItem);
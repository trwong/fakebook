import React from 'react';
import { connect } from 'react-redux';
import Feed from './feed';
import { logout } from './../../actions/session';
import { fetchPosts } from "./../../actions/post";


const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  logout: () => dispatch(logout()),
});


export default connect( mapStateToProps, mapDispatchToProps)(Feed);
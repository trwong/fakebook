import React from 'react';
import { connect } from 'react-redux';
import Feed from './feed';
import { logout } from './../../actions/session';
import { fetchPosts } from "./../../actions/post";
import { withRouter } from "react-router-dom";


const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = dispatch => ({
  fetchPosts: profileId => dispatch(fetchPosts(profileId)),
  logout: () => dispatch(logout()),
});


export default withRouter(connect( mapStateToProps, mapDispatchToProps)(Feed));
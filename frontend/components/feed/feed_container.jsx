import React from 'react';
import { connect } from 'react-redux';
import Feed from './feed';
import { logout } from './../../actions/session';

const mapStateToProps = state => {
  console.log(state)
  return ({

})};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});


export default connect( mapStateToProps, mapDispatchToProps)(Feed);
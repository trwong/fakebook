import React from 'react';
import { connect } from 'react-redux';
import RssFeed from './rss_feed';
import { getRSS } from './../../util/rss_utils';


const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = dispatch => ({
  getRSS: url => getRSS(url),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(RssFeed);
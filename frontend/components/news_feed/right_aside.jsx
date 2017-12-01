import React from 'react';
import RssFeedContainer from './../rss_feed/rss_feed_container';

class RightAside extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="right-aside-container">
        <RssFeedContainer />
      </div>
    );
  }
}

export default RightAside;
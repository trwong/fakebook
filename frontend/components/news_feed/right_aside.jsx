import React from 'react';
import RssFeedContainer from './../rss_feed/rss_feed_container';

class RightAside extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <RssFeedContainer />
      </div>
    );
  }
}

export default RightAside;
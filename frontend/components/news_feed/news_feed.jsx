import React from 'react';
import FeedContainer from "./../feed/feed_container";

class NewsFeed extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="news-feed">
        <FeedContainer />
      </div>
    );
  }
}

export default NewsFeed;
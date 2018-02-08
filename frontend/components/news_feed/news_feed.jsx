import React from 'react';
import FeedContainer from "./../feed/feed_container";
import RightAsideContainer from "./right_aside_container";
import LeftAsideContainer from "./left_aside_container";

class NewsFeed extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="news-feed">
        <LeftAsideContainer />
        <FeedContainer />
        <RightAsideContainer />
      </div>
    );
  }
}

export default NewsFeed;
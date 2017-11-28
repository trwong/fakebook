import React from 'react';
import PostFormContainer from './../form/post_form_container';
import FeedIndexContainer from './feed_index_container';

class Feed extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPosts();
  } 

  render() {
    return (
    <div className="feed-container">
      <PostFormContainer />
      <FeedIndexContainer />
    </div>
    );
  }
}

export default Feed;
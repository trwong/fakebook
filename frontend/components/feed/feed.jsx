import React from 'react';
import PostFormContainer from './../form/post_form_container';
import FeedIndexContainer from './feed_index_container';

class Feed extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.match.params.userId) {
      this.props.fetchPosts(this.props.match.params.userId);
    } else {
      this.props.fetchPosts();
    }
  } 

  componentWillReceiveProps(newProps) {
    if (this.props.location.pathname !== newProps.location.pathname) {
      if (newProps.match.params.userId) {
        
        this.props.fetchPosts(newProps.match.params.userId);
      } else {
        this.props.fetchPosts();
      }
    }
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
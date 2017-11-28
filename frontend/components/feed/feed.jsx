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
    console.log("feed props", this.props);
    console.log("feed newProps", newProps);
    // debugger;
    if (this.props.location.pathname !== newProps.location.pathname) {
      if (newProps.match.params.userId) {
        console.log("if");
        console.log("newProps.match.params.userId", newProps.match.params.userId);
 
        this.props.fetchPosts(newProps.match.params.userId);
      } else {
        console.log("else");
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
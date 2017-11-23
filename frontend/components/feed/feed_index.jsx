import React from 'react';
import FeedIndexItem from "./feed_index_item";

class FeedIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchPosts();
  }  


  render() {
    const { posts } = this.props;
    return (
      <ul>
      { posts.map( post => <FeedIndexItem key={post.id} post={post} />) }
      </ul>
    );
  }
}

export default FeedIndex;
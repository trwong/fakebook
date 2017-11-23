import React from 'react';
import FeedIndexItemContainer from "./feed_index_item_container";
import merge from 'lodash/merge';

class FeedIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchPosts();
  } 

  render() {
    const { posts } = this.props;
    let reversePosts = merge([], posts).reverse();

    return (
      <ul>
      { reversePosts.map( post => 
      <FeedIndexItemContainer key={post.id} post={post} />) 
        }
      </ul>
    );
  }
}

export default FeedIndex;
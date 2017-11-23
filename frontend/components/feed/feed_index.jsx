import React from 'react';
import FeedIndexItemContainer from "./feed_index_item_container";

class FeedIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state ={ users: [] };
  }

  componentWillMount() {
    this.props.fetchPosts();
  } 

  render() {
    const { posts } = this.props;

    return (
      <ul>
      { posts.map( post => 
      <FeedIndexItemContainer key={post.id} post={post} />) 
        }
      </ul>
    );
  }
}

export default FeedIndex;
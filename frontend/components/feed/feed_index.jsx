import React from 'react';
import FeedIndexItemContainer from "./feed_index_item_container";
import merge from 'lodash/merge';

class FeedIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  componentWillMount() {
    this.props.fetchPosts();
  } 

  componentWillReceiveProps(newProps) {
    // debugger;
    this.setState(newProps);
    // this.render();
  }

  render() {
    let { all_ids, by_id, users } = this.state.posts;

    console.log(this.state);

    const display = all_ids ? ( 
      all_ids.map(id =>
        <FeedIndexItemContainer
          key={id}
          post={by_id[id]}
          user={users[by_id[id].author_id]}
          recipient={users[by_id[id].recipient_id]} />) 
    ) : ( 
      <div></div>
    );
    
    return (
      <ul>
      { display }
      </ul>
    );
  }
}

export default FeedIndex;
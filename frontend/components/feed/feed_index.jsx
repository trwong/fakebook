import React from 'react';
import FeedIndexItemContainer from "./feed_index_item_container";
import merge from 'lodash/merge';

class FeedIndex extends React.Component {
  constructor(props) {
    super(props);
    // this.state = props;
  }

  // componentDidMount() {
  //   this.props.fetchPosts();
  // } 

  // componentWillReceiveProps(newProps) {
  //   // debugger;
  //   console.log("feed index state", this.state);
  //   if (this.props !== newProps) {
  //     this.setState(newProps);
  //   }
  // }

  render() {
    let { all_ids, by_id, users } = this.props.posts;
    console.log("this.",this.props);

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
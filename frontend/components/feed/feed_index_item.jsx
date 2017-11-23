import React from 'react';

class FeedIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    console.log(this.props);
    const { id, body } = this.props.post;
    return (
      <div>{id} - {body}</div>
    );
  }
}

export default FeedIndexItem;
import React from 'react';

class FeedIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    const { id, body } = this.props.post;
    const { user } = this.props;
    return (
      <div>{id} - {body} - {user}</div>
    );
  }
}

export default FeedIndexItem;
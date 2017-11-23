import React from 'react';

class FeedIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.user = this.props.fetchUser(this.props.post.author_id);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.post.author_id);
  }

  render() {
    const { id, body } = this.props.post;
    const { users } = this.props;
    return (
      <div>{id} - {body} - {users.first_name}</div>
    );
  }
}

export default FeedIndexItem;
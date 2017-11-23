import React from 'react';
import Link from 'react-router-dom';

class FeedIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.user = this.props.fetchUser(this.props.post.author_id);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.post.author_id);
  }

  render() {
    const { post, users } = this.props;
    return (
      <div>
        {/* TODO1 fix link "to" once profiles are made */}
        {users.first_name} {users.last_name}
        <br />
        {post.created_at}
        <br />
        {post.body}
      </div>
    );
  }
}

export default FeedIndexItem;
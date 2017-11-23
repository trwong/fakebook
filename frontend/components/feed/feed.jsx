import React from 'react';
import PostFormContainer from './../form/post_form_container';

class Feed extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div>
      <PostFormContainer />
    </div>
    );
  }
}

export default Feed;
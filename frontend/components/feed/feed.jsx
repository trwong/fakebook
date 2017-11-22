import React from 'react';

class Feed extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div>
      Success! you're in teh feed!
      <button onClick={this.props.logout}>Log Out</button>
    </div>
    );
  }
}

export default Feed;
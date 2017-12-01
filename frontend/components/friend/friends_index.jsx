import React from 'react';

class FriendsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  

  render() {
    let { user } = this.props;

    let display = (user && user.friends && user.friends.length > 0) ? (
      <div></div>
    ): (
      // TODO2 add styling for no friends
      <div>No Friends :(</div>
      );

    return (
      <div className="friends-index-container">

      </div>
    );
  }
}

export default FriendsIndex;
import React from 'react';

class FriendsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  

  render() {
    let { user } = this.props;
    
    let display = (user && user.length > 0) ? (
      <div></div>
    ): (
      <div></div>
      );

    return (
      <div className="friends-index-container">

      </div>
    );
  }
}

export default FriendsIndex;
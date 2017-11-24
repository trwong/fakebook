import React from 'react';

class ProfileDisplay extends React.Component {
  constructor(props) {
    super(props);
    // this.profileUser = 
  }

  componentDidMount() {
  //   console.log("profile display comp mount", this.props);
    this.props.fetchUser(this.props.match.params.userId);
  }

  render() {
    let profileUser;
    let profileFirstName;
    let profileLastName;

    let users = this.props.users;
    let userId = this.props.match.params.userId;

    if (Object.keys(users).includes(userId)) {
      profileUser = this.props.users[this.props.match.params.userId];
      profileFirstName = profileUser.first_name;
      profileLastName = profileUser.last_name;
    }

    console.log("users", this.props.users);

    return (
      <div className="profile-display-container">
        <img
          className="profile-cover-image"
          src="http://colorfully.eu/wp-content/uploads/2012/10/empty-road-highway-with-fog-facebook-cover.jpg"
          // TODO1 replace with user cover pic url
          alt="user cover picture"/>
        <span className="profile-image-container">
          <img
            className="profile-profile-image"
            src="/assets/karim.png"
            // TODO1 replace with user profile pic url
            alt="user profile picture"/>
        </span>
        <span className="profile-user-name">{ profileFirstName } { profileLastName }</span>
        {/* TODO1 add add friend functionality */}
        <button className="profile-add-friend-button">Add Friend</button>
        
      </div>
    );
  }
}

export default ProfileDisplay;
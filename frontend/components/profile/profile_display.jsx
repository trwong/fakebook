import React from 'react';
import cloudinary from 'cloudinary-core';

class ProfileDisplay extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   profileUser: this.props.profileUser,
    // };
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.location.pathname !== this.props.location.pathname) {
      this.props.fetchUser(newProps.match.params.userId);
    }
  }

  handleProfilePic() {

  }

  handleCoverPic() {

  }

  render() {
    let profileFirstName;
    let profileLastName;
    
    let profileUser = this.props.profileUser;

    
    if (profileUser !== undefined ) {
      profileFirstName = profileUser.first_name;
      profileLastName = profileUser.last_name;
    }
    

    return (
      <div className="profile-display-container">
        <img
          className="profile-cover-image"
          src="http://colorfully.eu/wp-content/uploads/2012/10/empty-road-highway-with-fog-facebook-cover.jpg"
          // TODO1 replace with user cover pic url
          alt="user cover picture"/>
        <span className="profile-image-container">
          <img
            onClick={this.handleProfilePic}
            className="profile-profile-image"
            src="/assets/karim.png"
            // TODO1 replace with user profile pic url
            alt="user profile picture"/>
        </span>
        <span className="profile-user-name">{ profileFirstName } { profileLastName }</span>
        {/* TODO1 add add friend functionality */}
        <button
          className="profile-add-friend-button uibutton">Add Friend</button>
        
      </div>
    );
  }
}

export default ProfileDisplay;
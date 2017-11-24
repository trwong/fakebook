import React from 'react';
import cloudinary from 'cloudinary-core';

class ProfileDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
  }

  handleProfilePic() {
    // cloudinary.openUploadWidget({ cloud_name: 'trwong', upload_preset: 'umzpk5ol' },
    //   function (error, result) { console.log(error, result); }); 
    cloudinary.openUploadWidget({ cloud_name: 'demo', upload_preset: 'a5vxnzbp' });
  }

  handleCoverPic() {
    
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
        <button className="profile-add-friend-button">Add Friend</button>
        
      </div>
    );
  }
}

export default ProfileDisplay;
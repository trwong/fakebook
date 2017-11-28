import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';

const CLOUDINARY_UPLOAD_PRESET = "umzpk5ol";
const CLOUDINARY_UPLOAD_URL = "https://api.cloudinary.com/v1_1/trwong/image/upload";

class ProfileDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      profile_img_url: "",
      cover_img_url: "",
    };

    this.profileUser = this.props.users[this.props.match.params.userId];

    this.profileImageDrop = this.profileImageDrop.bind(this);
    this.handleProfileImageUpload = this.handleProfileImageUpload.bind(this);
    this.coverImageDrop = this.coverImageDrop.bind(this);
    this.handleCoverImageUpload = this.handleCoverImageUpload.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.ownProps.match.params.userId);
    if (this.props.users && this.props.users[this.props.ownProps.match.params.userId]) {
      this.setState({
        id: this.props.ownProps.match.params.userId,
        profile_img_url: this.profileUser.profile_img_url,
        cover_img_url: this.profileUser.cover_img_url,
      });
    }
  }

  componentWillReceiveProps(newProps) {
    let newUserId = newProps.ownProps.match.params.userId;
    
    if (newProps.location.pathname !== this.props.location.pathname) {
      this.props.fetchUser(newProps.match.params.userId);
    }
    // if (newProps.users[newUserId].profile_img_url !==
    //   this.profileUser.profile_img_url) {
    //   this.setState({
    //     profile_img_url: newProps.users[newUserId].profile_img_url
    //   });
    // }
    // if (newProps.users[newUserId].cover_img_url !==
    //   this.profileUser.cover_img_url) {
    //   this.setState({
    //     cover_img_url: newProps.users[newUserId].cover_img_url
    //   });
    // }
  }

  handleProfilePicClick() {
    $("#profile-picture-file-input").click();
  }

  handleCoverPicClick() {
    $("#cover-picture-file-input").click();
  }

  profileImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });

    this.handleProfileImageUpload(files[0]);
  }

  handleProfileImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          profile_img_url: response.body.secure_url
        }, () => this.props.updateUser({
            id: parseInt(this.props.currentUser.id),
            profile_img_url: this.state.profile_img_url,
        })
      );
      }
    });
  }

  coverImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });

    this.handleCoverImageUpload(files[0]);
  }

  handleCoverImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          cover_img_url: response.body.secure_url
        }, () => this.props.updateUser({
            id: parseInt(this.props.currentUser.id),
            cover_img_url: this.state.cover_img_url,
        })
      );
      }
    });
  }

  render() {
    let profileFirstName;
    let profileLastName;
    
    let profileUser = this.profileUser;

    if (profileUser !== undefined ) {
      profileFirstName = profileUser.first_name;
      profileLastName = profileUser.last_name;
    }
    
    return (
      <div className="profile-display-container">
        <span className="cover-image-container">
          <img
            onClick={this.handleCoverPicClick}
            className="profile-cover-image"
            src={this.state.cover_img_url}
            alt="user cover picture"
            />
          <Dropzone
              id="cover-picture-file-input"
              multiple={false}
              accept="image/*"
              onDrop={this.coverImageDrop}>
          </Dropzone>
          <span
            className="cover-fade"
            onClick={this.handleCoverPicClick}>
            <i className="fa fa-camera cover-fade-camera" aria-hidden="true"></i>
            Update Cover Photo
          </span>
        </span>

        <span className="profile-image-container">
          <img
            onClick={this.handleProfilePicClick}
            className="profile-profile-image"
            src={this.state.profile_img_url}
            alt="user profile picture"/>
          <Dropzone
            id="profile-picture-file-input"
            multiple={false}
            accept="image/*"
            onDrop={this.profileImageDrop}>
          </Dropzone>
          <span
            className="profile-fade"
            onClick={this.handleProfilePicClick}>
            <i className="fa fa-camera profile-fade-camera" aria-hidden="true"></i>
            Update Profile Picture
          </span>
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
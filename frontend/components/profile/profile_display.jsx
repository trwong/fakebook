import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';

const CLOUDINARY_UPLOAD_PRESET = "umzpk5ol";
const CLOUDINARY_UPLOAD_URL = "https://api.cloudinary.com/v1_1/trwong/image/upload";

class ProfileDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: parseInt(this.props.currentUser.id),
      profile_img_url: this.props.currentUser.profile_img_url,
      cover_img_url: this.props.currentUser.cover_img_url,
    };

    this.profileImageDrop = this.profileImageDrop.bind(this);
    this.handleProfileImageUpload = this.handleProfileImageUpload.bind(this);
    this.coverImageDrop = this.coverImageDrop.bind(this);
    this.handleCoverImageUpload = this.handleCoverImageUpload.bind(this);
    // debugger;
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
    console.log("did mount before", this.state);
    this.setState({
      profile_img_url: this.props.currentUser.profile_img_url,
      cover_img_url: this.props.currentUser.cover_img_url,
    }, () => console.log("did mount after", this.state));
    
  }

  componentWillReceiveProps(newProps) {
    console.log("will receive before", this.state);
    if (newProps.location.pathname !== this.props.location.pathname) {
      console.log("inside will receive props if path");
      this.props.fetchUser(newProps.match.params.userId);
    }
    // if (this.state.profile_img_url !== newProps.currentUser.profile_img_url) {
    //   console.log("inside will receive props if profile");
    //   this.setState({profile_img_url: newProps.currentUser.profile_img_url});
    // }
    // if (this.state.cover_img_url !== newProps.currentUser.cover_img_url) {
      //   console.log("inside will receive props if cover");
      //   this.setState({cover_img_url: newProps.currentUser.cover_img_url});
      // }
      // console.log("will receive after", this.state);
    this.setState({profile_img_url: newProps.currentUser.profile_img_url});
    this.setState({cover_img_url: newProps.currentUser.cover_img_url});

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
        });
        // TODO/BUG below block of code only works inside the if statement
        this.props.updateUser({
            id: parseInt(this.props.currentUser.id),
            profile_img_url: this.state.profile_img_url,
        });
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
        });
        // TODO/BUG below block of code only works inside the if statement
        this.props.updateUser({
            id: parseInt(this.props.currentUser.id),
            cover_img_url: this.state.cover_img_url,
        });
      }
    });
  }

  render() {
    let profileFirstName;
    let profileLastName;
    
    let profileUser = this.props.profileUser;

    
    if (profileUser !== undefined ) {
      profileFirstName = profileUser.first_name;
      profileLastName = profileUser.last_name;
    }
    
    // debugger;
    return (
      <div className="profile-display-container">
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
              <p>Drop an image or click to select a file to upload.</p>
          </Dropzone>
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
              <p>Drop an image or click to select a file to upload.</p>
          </Dropzone>
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
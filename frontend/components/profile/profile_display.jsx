import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import { NavLink } from 'react-router-dom';

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


    this.profileImageDrop = this.profileImageDrop.bind(this);
    this.handleProfileImageUpload = this.handleProfileImageUpload.bind(this);
    this.coverImageDrop = this.coverImageDrop.bind(this);
    this.handleCoverImageUpload = this.handleCoverImageUpload.bind(this);
    this.handleProfilePicClick = this.handleProfilePicClick.bind(this);
    this.handleCoverPicClick = this.handleCoverPicClick.bind(this);
    
  }

  componentWillMount() {
    this.props.fetchUsers().then(() => {
      this.profileUser = this.props.users[this.props.match.params.userId];
    });
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
  //   if (this.props.users && this.props.users[this.props.match.params.userId]) {
  //     this.setState({
  //       id: this.props.match.params.userId,
  //       profile_img_url: this.profileUser.profile_img_url,
  //       cover_img_url: this.profileUser.cover_img_url,
  //     });
  //   }
  }

  componentWillReceiveProps(newProps) {
    let newUserId = newProps.match.params.userId;
    
    if (newProps.location.pathname !== this.props.location.pathname) {
      // this.props.fetchUser(newProps.match.params.userId);
      this.profileUser = newProps.users[newProps.match.params.userId];
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
    if (parseInt(this.props.match.params.userId) === this.props.currentUser.id) {
      $("#profile-picture-file-input").click();
    }
  }

  handleCoverPicClick() {
    if (parseInt(this.props.match.params.userId) === this.props.currentUser.id) {
      $("#cover-picture-file-input").click();
    }
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
        }, () => {
            this.props.updateUser({
              id: parseInt(this.props.currentUser.id),
              profile_img_url: this.state.profile_img_url,
            });
            this.props.getCurrentUser(this.props.currentUser.id);
          }
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
        }));
        this.props.getCurrentUser(this.props.currentUser.id);
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
    } else {
      return null;
    }

    let {
      currentUser,
      match,
      destroyFriend,
      getCurrentUser,
      postFriend,
      patchFriend
     } = this.props;

    let friendButton;
    let profileUserId = parseInt(match.params.userId);
    if (profileUserId === currentUser.id) {
      // current user's profile
      friendButton = "";
    } else if (currentUser.friends && 
        currentUser.friends.includes(profileUserId)) {
      // profile user is friend of current user
      friendButton = (
        <button
          className="profile-add-friend-button uibutton"
          onClick={() => destroyFriend(currentUser.id, profileUserId)
            .then(() => getCurrentUser(currentUser.id))}
          >Unfriend</button>
      );
    } else if (currentUser.friend_requested && 
        currentUser.friend_requested.includes(profileUserId)) {
      // current user sent request to profile user
      friendButton = (
        <button
          className="profile-add-friend-button uibutton"
          disabled
          >Friend Request Sent</button>
      );
    } else if (currentUser.friend_requests && 
        currentUser.friend_requests.includes(profileUserId)) {
      // current user received request from profile user
      friendButton = (
        <div className="profile-respond-friend-request">

          <button
            className="profile-add-friend-button uibutton profile-respond-friend-request-button"
            disabled
            >Respond to Friend Request</button>

          <div className="profile-respond-friend-request-pop-up">
            <div className="profile-respond-arrow-up"></div>
            <span
              className="profile-respond-friend-request-confirm"
              onClick={() => patchFriend(currentUser.id, profileUserId, "accepted")
                .then(() => getCurrentUser(currentUser.id))}>
              Confirm
            </span>
            <span
              className="profile-respond-friend-request-delete"
              onClick={() => destroyFriend(currentUser.id, profileUserId)
                .then(() => getCurrentUser(currentUser.id))}>
              Delete Request
            </span>
          </div>
        </div>
      );
    } else {
      // current user and profile user are not friends
      friendButton = (
        <button
          className="profile-add-friend-button uibutton"
          onClick={() => postFriend(profileUserId, currentUser.id)
            .then(() => getCurrentUser(currentUser.id))}
          >Add Friend</button>
      );
    }

    let displayProfileUpdate = (currentUser.id === parseInt(match.params.userId)) ? (
      <span
        className="profile-fade"
        onClick={this.handleProfilePicClick}>
        <i className="fa fa-camera profile-fade-camera" aria-hidden="true"></i>
        Update Profile Picture
      </span>
    ) : (
      ""
    );

    let displayCoverUpdate = (currentUser.id === parseInt(match.params.userId)) ? (
      <span
        className="cover-fade"
        onClick={this.handleCoverPicClick}>
        <i className="fa fa-camera cover-fade-camera" aria-hidden="true"></i>
        Update Cover Photo
      </span>
    ) : (
      ""
    );
    
    return (
      <div className="profile-display-container">
        <span className="cover-image-container">
          <img
            onClick={this.handleCoverPicClick}
            className="profile-cover-image"
            // src={profileUser.cover_img_url}
            src={this.props.users[this.props.currentUser.id].cover_img_url}
            alt="user cover picture"
            />
          <Dropzone
              id="cover-picture-file-input"
              multiple={false}
              accept="image/*"
              onDrop={this.coverImageDrop}>
          </Dropzone>
          { displayCoverUpdate }
        </span>

        <span className="profile-image-container">
          <img
            onClick={this.handleProfilePicClick}
            className="profile-profile-image"
            // src={profileUser.profile_img_url}
            src={this.props.users[this.props.currentUser.id].profile_img_url}
            alt="user profile picture"/>
          <Dropzone
            id="profile-picture-file-input"
            multiple={false}
            accept="image/*"
            onDrop={this.profileImageDrop}>
          </Dropzone>
            { displayProfileUpdate }
        </span>
        <span className="profile-user-name">{ profileFirstName } { profileLastName }</span>
        {/* <button
          className="profile-add-friend-button uibutton">Add Friend</button> */}
        {friendButton}

        <div className="profile-display-nav-bar">
          <NavLink
            className="profile-display-nav-link"
            exact
            to={`/profile/${profileUser.id}`}
            activeClassName="profile-nav-active-timeline"
            activeStyle={{ color: 'rgb(75, 79, 86)' }}>
            Timeline
            <div className="profile-nav-arrow-up profile-nav-active-timeline"></div>
          </NavLink>
          <NavLink
            className="profile-display-nav-link"
            to={`/profile/${profileUser.id}/friends`}
            activeClassName="profile-nav-active-friends"
            activeStyle={{ color: 'rgb(75, 79, 86)' }}>
            Friends
            <div className="profile-nav-arrow-up profile-nav-active-friends"></div>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default ProfileDisplay;
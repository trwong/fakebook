import React from 'react';
import { Link } from 'react-router-dom';
import FriendRequestIndexContainer from './../friend_request/friend_request_index_container';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
    //   results: [],
    };

    setInterval(() => this.props.getCurrentUser(this.props.currentUser.id), 2000);

    this.handleLogout = this.handleLogout.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.eraseQueryState = this.eraseQueryState.bind(this);
    this.addExitModal = this.addExitModal.bind(this);
    this.removeExitModal = this.removeExitModal.bind(this);
    this.removeQueryAndModal = this.removeQueryAndModal.bind(this);
  }

  handleLogout(event) {
    event.preventDefault();
    this.props.logout();
  }

  componentDidMount() {
    // fetching users to the rest of the app has access to it
    this.props.fetchUsers();
    if (this.props.currentUser) {
      this.props.getCurrentUser(this.props.currentUser.id);
    }
  }

  toggleFriendRequestModal() {
    document.getElementById("nav-friend-requests-pop-up").classList.toggle("hide-modal");
    document.getElementById("click-to-hide-friend-requests").classList.toggle("hide-modal");
  }

  handleChange(e) {
    this.setState({query: e.target.value});
    this.props.searchUsers(e.target.value);
    this.addExitModal();
  }

  eraseQueryState() {
    this.setState({query: ""});
    document
      .getElementById("nav-search-text-input")
      .value = "";
  }

  addExitModal() {
    document
      .getElementById("nav-bar-exit-modal")
      .classList
      .remove("hide-modal");
  }

  removeExitModal() {
    document
      .getElementById("nav-bar-exit-modal")
      .classList
      .add("hide-modal");
  }

  removeQueryAndModal() {
    this.removeExitModal();
    this.eraseQueryState();
  }
  
  render() {
    let firstName;
    let userId;
    let profile_img_url;
    let notifications;
    // TODO refactor below
    if (this.props.currentUser && Object.keys(this.props.users).length !== 0) {
      firstName = this.props.currentUser.first_name;
      userId = this.props.currentUser.id;
      // profile_img_url = this.props.users[userId].profile_img_url;
      profile_img_url = this.props.currentUser.profile_img_url;
      notifications = this.props.currentUser.friend_requests.length;
      if (notifications === 0) notifications = "";
    }


    let { search } = this.props;
    let displaySearch;
    if (this.state.query === "") {
      displaySearch = (
        <div></div>
      );
    } else if (search.length === 0) {
      displaySearch = (
        <div className="nav-search-no-results">No Search Results</div>
      );
    } else {
      displaySearch = (
        search.map( searchUser => (
          <div
            key={searchUser.id}
            className="nav-search-result">
            <Link
              onClick={this.removeQueryAndModal}
              className="nav-search-link"
              to={`/profile/${searchUser.id}`}>
              <div className="nav-search-content-container">
                <img
                  className="nav-search-results-image"
                  src={searchUser.profile_img_url}
                  alt="user profile thumbnail"/>
                <span
                  className="nav-search-name"
                  >{searchUser.first_name} {searchUser.last_name}</span>
                </div>
              </Link>
          </div>
        )
        )
      );
    }
    

    return (
      <header className="loggedin-nav">
        <div className="loggedin-nav-content">

          <div className="loggedin-nav-left">
            <Link to="/feed" >
              <img
                className="loggedin-nav-logo"
                src="/assets/facebook-f-logo.jpg"
                alt=""/>
            </Link>
            <input
              id="nav-search-text-input"
              // onClick={this.addExitModal}
              onChange={this.handleChange}
              type="text"
              placeholder="Search" />
              {/* TODO3 add search icon to search bar */}
            <div className="nav-search-result-container">
              { displaySearch }
            </div>
          </div>

          <div className="loggedin-nav-right">
            <div
              className="loggedin-nav-profile">
              <img
                className="loggedin-nav-profile-picture"
                src={ profile_img_url }
                alt="profile thumbnail"/>
              <Link
                className="loggedin-nav-profile-link"
                to={`/profile/${ userId }`}>{ firstName }</Link>
            </div>
            
            <div
              className="loggedin-nav-home">
              <Link
                className="loggedin-nav-profile-link"
                to="/feed">Home</Link>
            </div>

            <div
              className="loggedin-nav-friend-requests">
              <img
                onClick={this.toggleFriendRequestModal}
                className="loggedin-nav-friend-requests-icon"
                src="http://res.cloudinary.com/trwong/image/upload/v1512001725/Screen_Shot_2017-11-29_at_4.26.00_PM_vodfbo.png"
                alt="friend request icon"/>
              <span
                onClick={this.toggleFriendRequestModal}
                className="friend-request-notification">
                {notifications}
              </span>
              <div
                className="nav-friend-requests-pop-up hide-modal"
                id="nav-friend-requests-pop-up">
                <div className="nav-friend-request-arrow-up"></div>
                <div className="nav-friend-request-header">Friend Requests</div>
                <FriendRequestIndexContainer />
              </div>
            </div>

            <div
              className="loggedin-nav-logout">
              <button
                className="logout-button"
                onClick={this.handleLogout}
                >Log Out</button>
            </div>
          </div>
          
        </div>
        <div
          onClick={this.toggleFriendRequestModal}
          className="hide-modal"
          id="click-to-hide-friend-requests"
        ></div>

        <div
          className="hide-modal"
          onClick={this.removeQueryAndModal}
          id="nav-bar-exit-modal"></div>
      </header>
    );
  }
}

export default NavBar;
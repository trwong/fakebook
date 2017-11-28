import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(event) {
    event.preventDefault();
    this.props.logout();
  }

  componentDidMount() {
    // fetching users to the rest of the app has access to it
    this.props.fetchUsers();
  }
  
  render() {
    let firstName;
    let userId;
    let profile_img_url;
    if (this.props.user && this.props.posts.users) {
      firstName = this.props.user.first_name;
      userId = this.props.user.id;
      // profile_img_url = this.props.user.profile_img_url;
      // console.log("new prof img url", this.props.posts.users);
      profile_img_url = this.props.posts.users[userId].profile_img_url;
    }

    return (
      <header className="loggedin-nav">
        <div className="loggedin-nav-content">

          <div className="loggedin-nav-left">
            <img
              className="loggedin-nav-logo"
              src="/assets/facebook-f-logo.jpg"
              alt=""/>
            <input
              type="text"
              placeholder="Search" />
              {/* TODO3 add search icon to search bar */}
              {/* TODOB add search functionality */}
          </div>

          <div className="loggedin-nav-right">
            <div
              className="loggedin-nav-profile">
              {/* TODO2 add profile picture */}
              <img
                className="loggedin-nav-profile-picture"
                src={ profile_img_url }
                alt="profile thumbnail"/>
              <Link
                className="loggedin-nav-profile-link"
                to={`/profile/${ userId }`}>{ firstName }</Link>
              {/* TODO2 update 'to' field once profile page is built */}
            </div>
            
            <div
              className="loggedin-nav-home">
              <Link
                className="loggedin-nav-profile-link"
                to="/feed">Home</Link>
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
      </header>
    );
  }
}

export default NavBar;
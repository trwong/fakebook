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
  
  render() {
    console.log(this.props);

    let firstName;
    if (this.props.user) {
      console.log(this.props.user);
      firstName = this.props.user.first_name;
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
                src=""
                alt=""/>
              <Link
                className="loggedin-nav-profile-link"
                to="/feed">{ firstName }</Link>
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
            <button onClick={this.handleLogout}>Log Out</button>
            </div>
          </div>
          
        </div>
      </header>
    );
  }
}

export default NavBar;
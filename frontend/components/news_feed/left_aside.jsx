import React from 'react';
import { Link } from 'react-router-dom';

class LeftAside extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    let { currentUser, users } = this.props;

    if (!currentUser || !users || Object.keys(users).length === 0) {
      return null;
    }

    let { first_name, last_name, id } = currentUser;
    return (
      <div className="left-aside-container">
        <div className="left-aside-profile-info">
          <img
            className="right-aside-profile-pic-thumbnail"
            src={currentUser.profile_img_url}
            alt="profile image thumbnail"/>
          <span>{first_name} {last_name}</span>
        </div>
        <div className="news-feed-div-selected">
            <i className="fa fa-newspaper-o" aria-hidden="true"></i>
            News Feed
        </div>
        <div>
          <a
            className="remove-text-decoration"
            target="_blank"
            href="https://github.com/trwong/fakebook">
            <i className="fa fa-github" aria-hidden="true"></i>
            Github
          </a>
        </div>
        <div>
          <a
            className="remove-text-decoration"
            target="_blank"
            href="https://www.linkedin.com/in/taylor-reed-wong">
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            Linkedin
          </a>
        </div>
        <div>
          <a
            className="remove-text-decoration"
            target="_blank"
            href="https://www.taylorrwong.com">
            <i className="fa fa-code" aria-hidden="true"></i>
            Personal Site
          </a>
        </div>
        <div>
          <a
            className="remove-text-decoration"
            target="_blank"
            href="https://trwong.github.io/3dpong/">
            <i className="fa fa-gamepad" aria-hidden="true"></i>
            3D Pong
          </a>
        </div>
        <div>
          <a
            className="remove-text-decoration"
            target="_blank"
            href="http://txtlink.org">
            <i className="fa fa-link" aria-hidden="true"></i>
            Link
          </a>
        </div>
      </div>
    );
  }
}

export default LeftAside;
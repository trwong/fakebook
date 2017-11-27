import React from 'react';
import { Link } from 'react-router-dom';
import CommentContainer from './../comment/comment_container.jsx';

class FeedIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { post, user } = this.props;

    let recipientText;
    if (this.props.recipient !== undefined) {
      let { first_name, last_name, id } = this.props.recipient;
      recipientText = this.props.recipient ? (
        <span>
          <i className="fa fa-caret-right feed-item-caret" aria-hidden="true"></i>
          <Link
            to={`/profile/${id}`}
            className="feed-item-profile-link"
            >
            <span
              className="feed-item-profile-name">{`${first_name} ${last_name}`}</span>
          </Link>
        </span>
      ) : (
        ""
      );
    }

    return (
      <div className="feed-item-container">
        {/* TODO1 fix link "to" once profiles are made */}
        <div className="feed-item-header">
          <img 
            className="profile-thumbnail-medium-circle"
            src="/assets/karim.png"
            alt="profile picture thumbnail"/>
          <span className="feed-item-header-info">
          {/* TODO1 update to link once profiles are built */}

            <span className="feed-item-name-container">
              <Link
                to={`/profile/${user.id}`}
                className="feed-item-profile-link"
                ><span
                  className="feed-item-profile-name"
                  >{user.first_name} {user.last_name} </span></Link>
                {recipientText}
            </span>
            
            <span>{post.created_at}</span>
          </span>
        </div>
        
        <br />
        {post.body}
        <CommentContainer />
      </div>
    );
  }

}
export default FeedIndexItem;
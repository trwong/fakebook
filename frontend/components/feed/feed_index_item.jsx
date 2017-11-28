import React from 'react';
import { Link } from 'react-router-dom';
import CommentContainer from './../comment/comment_container.jsx';

class FeedIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let { body, id } = this.props.post;
    if (body.length < 85) {
      $(`#feed-item-post-body-${id}`)
        .addClass("under-eighty-five-characters");
    }
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
        <div className="feed-comment-divider">
          {/* TODO1 fix link "to" once profiles are made */}
          <div className="feed-item-header">
            <img 
              className="profile-thumbnail-medium-circle"
              src={ user.profile_img_url }
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
          <span id={`feed-item-post-body-${post.id}`}>
            {post.body}
          </span>
        </div>
        <CommentContainer postId={post.id}/>
      </div>
    );
  }

}
export default FeedIndexItem;
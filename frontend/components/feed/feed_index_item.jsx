import React from 'react';
import { Link } from 'react-router-dom';
import CommentContainer from './../comment/comment_container.jsx';

class FeedIndexItem extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   body: this.props.post.body
    // };

    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    let { body, id } = this.props.post;
    if (body.length < 85) {
      $(`#feed-item-post-body-${id}`)
        .addClass("under-eighty-five-characters");
    }
  }

  handleEdit() {

  }

  handleDelete() {
    this.props.destroyPost(this.props.post.id);
  }

  render() {
    const { post, user, users } = this.props;
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
          <div className="feed-item-header">
            <img 
              className="profile-thumbnail-medium-circle"
              src={ users[user.id].profile_img_url }
              alt="profile picture thumbnail"/>
            <span className="feed-item-header-info">

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
            <i
              className="fa fa-ellipsis-h feed-item-ellipsis"
              aria-hidden="true"></i>
            <div className="feed-item-edit-pop-up">
              <span
                onClick={this.handleEdit}
                className="feed-item-edit-button"
                >Edit Post</span>
              <span
                onClick={this.handleDelete}
                className="feed-item-delete-button"
                >Delete</span>
            </div>
          </div>
          <br />
          <span id={`feed-item-post-body-${post.id}`}>
            {post.body}
          </span>
          {/* <form action="">
            <textarea value=""></textarea>
          </form> */}
        </div>
        <CommentContainer postId={post.id}/>
      </div>
    );
  }

}
export default FeedIndexItem;
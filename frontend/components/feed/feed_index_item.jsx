import React from 'react';
import { Link } from 'react-router-dom';
import CommentContainer from './../comment/comment_container.jsx';
import FeedLikeDisplayContainer from './feed_like_display_container';

class FeedIndexItem extends React.Component {
  constructor(props) {
    super(props);
    // TODO refactor state
    this.state = {
      body: this.props.post.body,
      id: this.props.post.id,
      author_id: this.props.post.author_id,
      recipient_id: this.props.post.recipient_id,
      created_at: this.props.post.created_at,
      comments: this.props.post.comments,
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleBodyEdit = this.toggleBodyEdit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleModal = this.handleModal.bind(this);
    this.handleModalAndToggle = this.handleModalAndToggle.bind(this);
    this.toggleLike = this.toggleLike.bind(this);
    this.handleComment = this.handleComment.bind(this);
  }

  componentDidMount() {
    // increases font size of posts with under 85 characters to mimic FB functionality
    // let { body, id } = this.props.post;
    // if (body.length < 85) {
    //   $(`#feed-item-post-body-${id}`)
    //     .addClass("under-eighty-five-characters");
    // }
    
    let { post } = this.props;
    if ( post.current_user_likes ) {
      $(`.feed-item-like-bar-like-${ post.id }`)
        .addClass("like-selected");
    }
  }

  handleChange(e) {
    this.setState({body: e.target.value});
  }

  handleEdit(e) {
    e.preventDefault();
    this.props.editPost(this.state);
    this.toggleBodyEdit();
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.destroyPost(this.props.post.id);
  }

  toggleBodyEdit() {
    document.getElementById(`feed-item-post-body-${this.props.post.id}`).classList.toggle("toggle-hide");
    document.getElementById(`feed-item-form-${this.props.post.id}`).classList.toggle("toggle-hide");
  }

  handleModal() {
    document
      .getElementById(`feed-item-edit-modal-${this.props.post.id}`)
      .classList.toggle("toggle-hide");
    document
      .getElementById(`click-to-hide-modal-${this.props.post.id}`)
      .classList.toggle("toggle-hide");
  }

  handleModalAndToggle() {
    this.handleModal();
    this.toggleBodyEdit();
  }

  toggleLike() {
    let { post, createLike, destroyLike, currentUser } = this.props;
    let like = {};
    like["liker_id"] = currentUser.id;
    like["likeable_type"] = 'Post';
    like["likeable_id"] = post.id;

    if ( post.current_user_likes ) {
      destroyLike(like);
      $(`.feed-item-like-bar-like-${post.id}`)
      .removeClass("like-selected");
    } else {
      createLike(like);
      $(`.feed-item-like-bar-like-${post.id}`)
        .addClass("like-selected");
    }
  }

  handleComment() {
    let { id } = this.state;
    document.getElementById(`comment-form-input-${ id }`).focus();
    document.getElementById(`comment-form-input-${ id }`).select();
  }

  render() {
    const { post, user, users } = this.props;
    let profilePic, userId, userFirstName, userLastName;
    if (user) {
      profilePic = users[user.id].profile_img_url;
      userId = user.id;
      userFirstName = user.first_name;
      userLastName = user.last_name;
    }

    let recipientText;
    if (this.props.recipient !== undefined) {
      let { recipient, currentUser } = this.props;
      let { first_name, last_name, id } = recipient;
      recipientText = (recipient && recipient.id !== currentUser.id)   ? (
      // recipientText = (recipient)   ? (
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

    let showModal = (post.author_id === this.props.currentUser.id) ? (
      <i
        onClick={this.handleModal}
        className="fa fa-ellipsis-h feed-item-ellipsis"
        aria-hidden="true"></i>
    ) : (
      ""
    );
    return (
      <div className="feed-item-container">
        <div className="feed-comment-divider">
          <div className="feed-item-header">
            <img 
              className="profile-thumbnail-medium-circle"
              src={ profilePic }
              alt="profile picture thumbnail"/>
            <span className="feed-item-header-info">

              <span className="feed-item-name-container">
                <Link
                  to={`/profile/${userId}`}
                  className="feed-item-profile-link"
                  ><span
                    className="feed-item-profile-name"
                    >{userFirstName} {userLastName} </span></Link>
                  {recipientText}
              </span>
              
              <span className="feed-item-date-time">{post.created_at}</span>
            </span>
            {showModal}
            <div
              id={`feed-item-edit-modal-${post.id}`}
              className="feed-item-edit-pop-up toggle-hide">
              <span
                onClick={this.handleModalAndToggle}
                className="feed-item-edit-button"
                >Edit Post</span>
              <span
                onClick={this.handleDelete}
                className="feed-item-delete-button"
                >Delete</span>
            </div>
          </div>
          <br />
          <div id={`feed-item-post-body-${post.id}`}>
            {post.body}
          </div>
          <form
            id={`feed-item-form-${post.id}`}
            className="toggle-hide">
            <textarea
              className="feed-item-edit-input"
              onChange={this.handleChange}
              value={this.state.body}
              ></textarea>
            <div className="feed-item-edit-buttons">
              <button
                className="feed-item-edit-cancel-button"
                onClick={this.toggleBodyEdit}
                >Cancel</button>
              <button
                className="feed-item-edit-done-editing-button"
                onClick={this.handleEdit}
                >Done Editing</button>
            </div>
          </form>

          <div className='feed-item-like-bar'>
            <span 
              onClick={this.toggleLike}
              className={`feed-item-like-bar-like-${post.id}`}>
              <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
              Like
            </span>
            <span
              onClick={ this.handleComment }
              className="feed-item-like-bar-comment">
              <i className="fa fa-comment-o" aria-hidden="true"></i>
              Comment
            </span>
          </div>

          <div
            onClick={this.handleModal}
            className="click-to-hide-modal toggle-hide"
            id={`click-to-hide-modal-${post.id}`}
          ></div>
        </div>
        <FeedLikeDisplayContainer post={post} users={users}/>
        <CommentContainer postId={post.id}/>
      </div>
    );
  }

}
export default FeedIndexItem;
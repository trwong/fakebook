import React from 'react';
import { Link } from 'react-router-dom';

class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: this.props.comment.body,
      id: this.props.comment.id,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleModal = this.handleModal.bind(this);
    this.handleModalAndToggle = this.handleModalAndToggle.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleBodyEdit = this.toggleBodyEdit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleChange(e) {
    this.setState({ body: e.target.value });
  }

  handleModal() {

  }

  handleModalAndToggle() {

  }

  handleDelete() {
    this.props.destroyComment(this.props.comment.post_id, this.props.comment.id);
  }

  toggleBodyEdit() {

  }

  handleEdit(e) {
    e.preventDefault();
    this.props.updateComment(this.props.comment.post_id, this.state);
  }

  render() {
    let { comment, posts } = this.props;
    let { all_ids, by_id, comments, users } = posts;
    let commentId = comment.id;

    let showModal = (comment.author_id === this.props.currentUser.id) ? (
      <i
        onClick={this.handleModal}
        className="fa fa-ellipsis-h comment-item-ellipsis"
        aria-hidden="true"></i>
    ) : (
        ""
      );

    return (
    <div className="comment-index-item">

      <div className="profile-thumbnail-container">
        <img
          className="profile-thumbnail-small-circle"
          src={users[comment.author_id].profile_img_url}
          alt="user profile thumbnail"/>
      </div>

      <div className="comment-name-body-date">
        <Link
          className="comment-item-profile-link"
          to={`/profile/${comment.author_id}`}>
          <span
            className="comment-item-author-name"
          >{users[comment.author_id].first_name} {users[comment.author_id].last_name}</span>
        </Link>
        <span>{comment.body}</span>
        <div className="comment-item-date">
          { comment.created_at }
        </div>

      </div>

      {showModal}
      <div
        id={`comment-item-edit-modal-${commentId}`}
        className="comment-item-edit-pop-up comment-toggle-hide">
        <span
          onClick={this.handleModalAndToggle}
          className="comment-item-edit-button"
        >Edit...</span>
        <span
          onClick={this.handleDelete}
          className="comment-item-delete-button"
        >Delete...</span>
      </div>

      <form
        onSubmit={this.handleEdit}
        id={`comment-item-form-${commentId}`}
        className="comment-comment-toggle-hide">
        <input
          className="comment-form-input"
          type="text"
          onChange={this.handleChange}
          value={this.state.body} />
        <div className="comment-item-edit-buttons">
          <button
            onClick={this.toggleBodyEdit}
          >Cancel</button>
          <button
            onClick={this.handleEdit}
          >Done Editing</button>
        </div>
      </form>
      <div
        onClick={this.handleModal}
        className="click-to-hide-modal toggle-hide"
          id={`click-to-hide-modal-${commentId}`}
      ></div>

    </div>
    );
  }
}

export default CommentIndexItem;
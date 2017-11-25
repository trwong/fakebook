import React from 'react';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      author_id: parseInt(this.props.currentUser.id),
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.eraseText = this.eraseText.bind(this);
  }

  eraseText() {
    document.getElementById('post-form-text-area').value = "";
  }

  handleChange(e) {
    this.setState({body: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createPost(this.state);
    document.getElementById('post-form-text-area').value = "";
  }

  render() {
    let firstName = this.props.currentUser.first_name;
    let userId = this.props.currentUser.id;


    let placeholderText;
    if (
      this.props.location.pathname === "/feed" ||
      this.props.location.pathname === `/profile/${userId}`
    ) {
      placeholderText = `What's on your mind, ${firstName}?`;
    } else {
      // TODO2 add string interpolation for user first name
      let profileFirstName;
      let profileUser = this.props.profileUser;
      if (profileUser !== undefined ) {
        profileFirstName = profileUser.first_name;
      }
      placeholderText = `Write something to ${profileFirstName}...`;
    }

    return (
      <div className="post-form-container">
        <textarea
          id="post-form-text-area"
          name="body"
          className="post-form-input"
          placeholder={placeholderText}
          onChange={this.handleChange}
        >
        </textarea>
        <div className="arrow-up"></div>
        <span
          className="make-post">
          <img
            src="/assets/edit-icon.svg"
            className="make-post-icon"/> Make Post</span>
        <button
          className="feed-form-post-button"
          onClick={this.handleSubmit}
          >Post</button>
      </div>
    );
  }
}

export default PostForm;
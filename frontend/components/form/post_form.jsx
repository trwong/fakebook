import React from 'react';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      author_id: parseInt(this.props.currentUser.id),
      recipient_id: undefined,
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

    // set recipient ID if not on news feed or own profile
    // TODO/BUG this should probably live in the handleSubmit func below. Calling this on every
    // mouse stroke is inefficient but it doesn't save data to db while in handleSubmit
    let paramId = this.props.ownProps.match.params.userId;
    if (paramId && paramId !== this.props.currentUser.id) {
      this.setState({ recipient_id: paramId });
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    // set recipient ID if not on news feed or own profile
    let paramId = this.props.ownProps.match.params.userId;
    if (paramId && paramId !== this.props.currentUser.id) {
      this.setState({ recipient_id: paramId });
    }

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
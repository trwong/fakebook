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

  componentWillReceiveProps(newProps) {
    this.firstName = this.newProps.currentUser.first_name;
  }

  render() {
    // let firstName = this.props.currentUser.first_name;
    console.log(this.firstName);
    return (
      <div className="post-form-container">
        <form
          action=""
          className="post-form"
          >
          <textarea
            id="post-form-text-area"
            name="body"
            className="post-form-body"
            placeholder={`What's on your mind, ${this.firstName}?`}
            onChange={this.handleChange}
          >
          </textarea>
          <button
            onClick={this.handleSubmit}
            >Post</button>
        </form>
      </div>
    );
  }
}

export default PostForm;
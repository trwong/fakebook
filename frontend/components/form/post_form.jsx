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
  }

  handleChange(e) {
    this.setState({body: e.target.value});
  }

  handleSubmit(e) {
    console.log(this.state);
    e.preventDefault();
    this.props.createPost(this.state);
  }

  render() {
    let firstName = this.props.currentUser.first_name;

    return (
      <div className="post-form-container">
        <form
          action=""
          className="post-form"
          >
          <textarea
            name="body"
            className="post-form-body"
            placeholder={`What's on your mind, ${firstName}?`}
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
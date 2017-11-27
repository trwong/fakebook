import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: "",
      author_id: parseInt(this.props.currentUser.id),
      post_id: this.props.postId,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({body: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createComment(this.props.postId, this.state);
  }

  render() {
    let { postId } = this.props;
    
    return (
    <div className="comment-form-container">
      <form
        onSubmit={this.handleSubmit}>
        <input type="text"
          onChange={this.handleChange}
          placeholder="Write a comment..."
          value={this.state.body}/>
      </form>
    </div>
    );
  }
}

export default CommentForm;
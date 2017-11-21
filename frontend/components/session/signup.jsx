import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleInput(type) {
    return (event) => {
      this.setState({ [type]: event.target.value });
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createNewUser(this.state)
      .then( () => this.props.history.push('/feed'));
  }

  render () {
    return (
      <div>
        <h3>Sign Up</h3>
        <label>Email
          <input
            type="text" 
            value={this.state.email}
            onChange={this.handleInput("email")}
            />
        </label>

        <label>Password
          <input
            type="password" 
            value={this.state.password}
            onChange={this.handleInput("password")}
            />
        </label>
        <button onClick={this.handleSubmit}>Log In</button>
      </div>
    );
  }
}

export default Signup;
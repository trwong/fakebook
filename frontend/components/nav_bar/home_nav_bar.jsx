import React from 'react';
import { Link } from 'react-router-dom';

// export default ({ currentUser, logout }) => {
//   const display = currentUser ? (
//     <div>
//       <p>{currentUser.email}</p>
//       <button onClick={logout}>Log Out</button>
//     </div>
//   ) : (
//     <div>
//       <Link to="/signup">Sign Up</Link>
//     </div>
//   );

//   return (
//     <header>
//       <img src="assets/fakebook.png" alt="fakebook logo"/>
//       <div>
//         {display}
//       </div>
//     </header>
//   );
// };

class HomeNavBar extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(type) {
    return (event) => {
      this.setState({ [type]: event.target.value });
    };
  }

  handleLogin(event) {
    event.preventDefault();
    this.props.login(this.state)
      .then( () => this.props.history.push('/feed'),
      () => this.addErrorsOutline()
    );
  }

  handleDemoLogin(event) {
    event.preventDefault();
    let demoUser = {
      email: "tay@tay.com",
      password: "password",
    };
    this.props.login(demoUser)
      .then(() => this.props.history.push('/feed'));
  }

  // componentWillReceiveProps(newProps) {
  //   this.addErrorsOutline();
  // }

  addErrorsOutline() {
    if (this.props.errors) {
      this.props.errors.forEach( error => {
        if (error.includes("username")) {
          $(".session-input-field").addClass("highlight-red");
        }
      }
    );
    }
  }

  removeErrorsOutline(event) {
    let $input = $(event.target);
    $input.removeClass("highlight-red");
  }

// TODO1 add error messages on unsuccessful login
  render() {
    return (
    <header className="home-nav-bar">
      <div className="home-nav-bar-content">
        <div>
            <h2 className='logo'>fakebook</h2>
          </div>
          
          <div>
            <form className="login-form">
              <div className="credential-input-form">
                <label>Email</label>  
                <input
                  className="session-input-field"
                  // id="email"
                  type="text"
                  value={this.state.email}
                  onFocus={this.removeErrorsOutline}
                  onChange={this.handleChange('email')} />
              </div>

              <div className="credential-input-form">
                <label>Password</label>
                <input
                  className="session-input-field"
                  type="password"
                  value={this.state.password}
                  onFocus={this.removeErrorsOutline}
                  onChange={this.handleChange('password')} />
              </div>
            
              <button
                onClick={this.handleLogin}
                className="log-in-button"
                >Log In</button>

              <button
                className="log-in-button"
                onClick={this.handleDemoLogin}
                >Demo</button>
            </form>
          </div>
        </div>
    </header>
    );
  }
}

export default HomeNavBar;
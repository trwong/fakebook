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
      <div className="home-container">
        <div className="home-container-content">
          <div className="home-aside">
            <div className="home-aside-content">
              <h2 className="home-aside-title">Connect with friends and the <br /> world around you on Fakebook</h2>
              <div className="home-aside-content">
                <div className="home-aside-item">
                  <img
                    src="https://scontent-dft4-3.xx.fbcdn.net/v/t39.2365-6/851565_602269956474188_918638970_n.png?oh=27689fd23ad24387d0e51c5356396a30&oe=5AD5DBF5"
                    alt="icon" />
                  <p><strong>See photos and updates</strong> from friends in News Feed</p>
                </div>
                <div className="home-aside-item">
                  <img
                    src="https://scontent-dft4-3.xx.fbcdn.net/v/t39.2365-6/851585_216271631855613_2121533625_n.png?oh=7df497332d05c12cb617e0e934da4734&oe=5A8D4620"
                    alt="icon" />
                  <p><strong>Share what's new</strong> in your life on your Timeline</p>
                </div>
                <div className="home-aside-item">
                  <img
                    src="https://scontent-dft4-3.xx.fbcdn.net/v/t39.2365-6/851558_160351450817973_1678868765_n.png?oh=bf9859ce8b08c56e840c8894bf4584cd&oe=5A961CD8"
                    alt="icon" />
                  <p><strong>Find more</strong> of what you're looking for with Facebook Search</p>
                </div>
              </div>
            </div>
          </div>


            <div className="sign-up-container">
              <h2>Sign Up</h2>
              {/* <div>It's free and always will be.</div> */}
                <input
                type="text"
                name="firstname"
                onChange={this.handleInput("firstName")}
                placeholder="First name"
                className="input-half-width"
                 />

              <input
                type="text"
                name="lastname"
                onChange={this.handleInput("lastName")}
                placeholder="Last name"
                className="input-half-width"
              />
              <br />

              <input
                type="text"
                name="email"
                onChange={this.handleInput("email")}
                placeholder="Email"
                className="input-full-width"
              />
              <br />

              <input
                type="password"
                name="password"
                onChange={this.handleInput("password")}
                placeholder="New password"
                className="input-full-width"
              />
              <br />
{/* TODO replace birhtday with dropdowns */}
              <label>Birthday
                <br />
                <input
                  type="date"
                  className="birthday-field" />
              </label>
              <br />
{/* TODO add link with modal for why we need birthday (check FB) */}
              <div className="gender-form">
                <input
                  type="radio"
                  />
                <span>Female</span>

                <input
                  type="radio"
                  />
                <span>Male</span>
              </div>
              <br />

              <a
                className="uibutton large special"
                href="#button"
                onClick={this.handleSubmit}
                >Create Account</a>
            </div>
        </div>
      </div>
    );
  }
}

export default Signup;
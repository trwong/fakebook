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
//       {/* TODO fix fakebook logo */}
//       <img src="./fakebook.png" alt="fakebook logo"/>
//       <div>
//         {display}
//       </div>
//     </header>
//   );
// };

class HomeNavBar extends React.Component {
 constructor(props) {
    super(props);
  }

  render() {
    return (
    <header className="home-nav-bar">
      <div className="home-nav-bar-content">
        <img
          src="fakebook.png"
          alt="fakebook logo"
          className="logo" />
          <form>
            <label>Email
              <input type="text"  />
            </label>

            <label>Password
              <input type="password"  />
            </label>

            <button>Log In</button>
          </form>
        </div>
    </header>
    );
  }
}

export default HomeNavBar;
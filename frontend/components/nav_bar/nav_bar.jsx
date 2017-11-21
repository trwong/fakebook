import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div>
      <p>{currentUser.email}</p>
      <button onClick={logout}>Log Out</button>
    </div>
  ) : (
    <div>
      <Link to="/signup">Sign Up</Link>
    </div>
  );

  return (
    <header>
      <h1>fakebook</h1>
      <div>
        {display}
      </div>
    </header>
  );
};
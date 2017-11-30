import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser)
});

const Auth = ({ loggedIn, path, component: Component }) => (
  <Route
    path={path}
    render={props => (
      loggedIn ? <Redirect to="/feed" /> : <Component {...props} />
    )}
  />
);

const Protected = ({ loggedIn, path, component: Component }) => (
  <Route
    path={path}
    render={props => (
      loggedIn ? <Component {...props} /> :  <Redirect to="/" />
    )}
  />
);

const ExactAuth = ({ loggedIn, path, component: Component }) => (
  <Route
    exact
    path={path}
    render={props => (
      loggedIn ? <Redirect to="/feed" /> : <Component {...props} />
    )}
  />
);

const ExactProtected = ({ loggedIn, path, component: Component }) => (
  <Route
    exact
    path={path}
    render={props => (
      loggedIn ? <Component {...props} /> : <Redirect to="/" />
    )}
  />
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
export const ExactAuthRoute = withRouter(connect(mapStateToProps)(ExactAuth));
export const ExactProtectedRoute = withRouter(connect(mapStateToProps)(ExactProtected));
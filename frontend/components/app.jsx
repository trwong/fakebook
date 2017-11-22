import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  AuthRoute,
  ProtectedRoute,
} from './../util/route_utils';

import FeedContainer from './feed/feed_container';
import SignupContainer from './session/signup_container';
import HomeNavBarContainer from './nav_bar/home_nav_bar_container';
import NavBarContainer from './nav_bar/nav_bar_container';


export default () => (
  <div>
    <Switch>
      <AuthRoute exact path="/" component={HomeNavBarContainer} />
      <Route path="/" component={NavBarContainer} />
    </Switch>
    <AuthRoute exact path="/" component={SignupContainer} />
    {/* TODO2 logged in user when visiting '/' is not redirected to /feed */}
    <ProtectedRoute path="/feed" component={FeedContainer} />
    {/* <AuthRoute path="/signup" component={SignupContainer} /> */}
  </div>
);
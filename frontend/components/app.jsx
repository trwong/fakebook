import React from 'react';
import { Route } from 'react-router-dom';
import {
  AuthRoute,
  ProtectedRoute,
} from './../util/route_utils';

import FeedContainer from './feed/feed_container';
import SignupContainer from './session/signup_container';
import HomeNavBarContainer from './nav_bar/home_nav_bar_container';


export default () => (
  <div>
    <Route exact path="/" component={HomeNavBarContainer} />
    <Route exact path="/" component={SignupContainer} />
    <ProtectedRoute path="/feed" component={FeedContainer} />
    <AuthRoute path="/signup" component={SignupContainer} />
  </div>
);
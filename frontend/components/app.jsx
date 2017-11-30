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
import ProfileContainer from './profile/profile_container';
import NewsFeed from './news_feed/news_feed_container';


export default () => (
  <div>
    <Switch>
      <AuthRoute exact path="/" component={HomeNavBarContainer} />
      <Route path="/" component={NavBarContainer} />
    </Switch>
    <AuthRoute exact path="/" component={SignupContainer} />
    <div className="fakebook-main-body">
      <ProtectedRoute
        path="/feed"
        component={NewsFeed} />
      {/* <AuthRoute path="/signup" component={SignupContainer} /> */}
      <ProtectedRoute
        path="/profile/:userId"
        component={ProfileContainer} />
    </div>
  </div>
);
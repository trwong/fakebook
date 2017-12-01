import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  AuthRoute,
  ProtectedRoute,
  ExactAuthRoute,
  ExactProtectedRoute,
} from './../util/route_utils';

import FeedContainer from './feed/feed_container';
import SignupContainer from './session/signup_container';
import HomeNavBarContainer from './nav_bar/home_nav_bar_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import ProfileContainer from './profile/profile_container';
import NewsFeed from './news_feed/news_feed_container';
import ProfileDisplayContainer from './profile/profile_display_container';
import FriendsContainer from './friend/friends_container';


export default () => (
  <div>
    <Switch>
      <AuthRoute exact path="/" component={HomeNavBarContainer} />
      <Route path="/" component={NavBarContainer} />
    </Switch>
    <ExactAuthRoute path="/" component={SignupContainer} />
    <div className="fakebook-main-body">
      <ProtectedRoute
        path="/feed"
        component={NewsFeed} />
      <ProtectedRoute
        path="/profile/:userId"
        component={ProfileDisplayContainer} />
      <Switch>
        <ProtectedRoute
          path="/profile/:userId/friends"
          component={FriendsContainer} />
        <ProtectedRoute
          path="/profile/:userId"
          component={ProfileContainer} />
      </Switch>
    </div>
  </div>
);
{/* <AuthRoute path="/signup" component={SignupContainer} /> */}
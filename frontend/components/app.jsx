import React from 'react';
import { Route } from 'react-router-dom';

import FeedContainer from './feed/feed_container';
import SignupContainer from './session/signup_container';
import NavBarContainer from './nav_bar/nav_bar_container';

export default () => (
  <div>
    <Route path="/" component={NavBarContainer} />
    <Route path="/feed" component={FeedContainer} />
    <Route path="/signup" component={SignupContainer} />
  </div>
);
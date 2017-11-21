import React from 'react';
import { Route } from 'react-router-dom';

import FeedContainer from './feed/feed_container';
import SignupContainer from './session/signup_container';

export default () => (
  <div>
    <Route path="/feed" component={FeedContainer} />
    <Route path="/signup" component={SignupContainer} />
  </div>
);
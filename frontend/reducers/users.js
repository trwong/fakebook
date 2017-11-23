import {
  RECEIVE_USER
} from './../actions/user';
import merge from 'lodash/merge';

export default (state=[], action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_USER:
      return action.user;
    default:
      return state;
  }
};

// TODO/BUG this may be broken - caused news feed issue where every username was the same
import {
  RECEIVE_USER,
  RECEIVE_USERS
} from './../actions/user';
import merge from 'lodash/merge';

export default (state={}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_USERS:
      return action.users;
    case RECEIVE_USER:
      return merge(newState, action.user);
    default:
      return state;
  }
};
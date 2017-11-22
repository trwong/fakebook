import {
  RECEIVE_CURRENT_USER,
  RECEIVE_SESSION_ERRORS,
} from './../actions/session';
import merge from 'lodash/merge';

const defaultState = [];

export default (state = defaultState, action) => {
  Object.freeze(state);
  
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return defaultState;
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    default:
      return state;
  }
};
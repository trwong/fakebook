import { combineReducers } from 'redux';
import session from './session';
import errors from './errors';
import posts from './posts';

export default combineReducers({
  session,
  errors,
  posts,
});
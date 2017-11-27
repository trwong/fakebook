import { combineReducers } from 'redux';
import session from './session';
import errors from './errors';
import posts from './posts';
import users from './users';
import comments from './comments';

export default combineReducers({
  session,
  errors,
  posts,
  users,
  comments,
});
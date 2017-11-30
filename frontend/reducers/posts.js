import {
  RECEIVE_POSTS,
  RECEIVE_POST,
  REMOVE_POST,
} from './../actions/post';
import {
  RECEIVE_COMMENT,
} from "./../actions/comment";
import {
  RECEIVE_USER,
} from "./../actions/user";
import merge from 'lodash/merge';

const _nullState = {
  all_ids: [],
  by_id: {},
  comments: {},
  users: {}
};

export default (state = _nullState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  let index;

  switch (action.type) {
    case RECEIVE_POSTS:
      return action.posts;
    case RECEIVE_POST:
      index = newState.all_ids.indexOf(action.post.id);
      if (index >= 0) {
        newState.all_ids.splice( index, 1 );
      }

      newState.all_ids.unshift(action.post.id);
      newState.by_id[action.post.id] = action.post;
      return newState;
    case REMOVE_POST:
      index = newState.all_ids.indexOf(action.postId);
      if (index >= 0) {
        newState.all_ids.splice( index, 1 );
      }
      // newState.by_id[action.postId] = undefined;
      delete newState.by_id[action.postId];
      return newState;

    case RECEIVE_COMMENT:
      newState.by_id[action.comment.post_id].comments.push(action.comment.id);
      newState.comments[action.comment.id] = action.comment;
      return newState;
      // TODO CHECK HERE FOR BUGS IF THERE ARE ISSUES WITH POST / USERS
    case RECEIVE_USER:
      newState.users[action.user.id] = action.user;
      return newState;
    default:
      return state;
  }
};
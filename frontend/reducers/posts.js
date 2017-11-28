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

export default (state = [], action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.posts;
    case RECEIVE_POST:
      newState.all_ids.unshift(action.post.id);
      newState.by_id[action.post.id] = action.post;
      return newState;
    case REMOVE_POST:
      let index = newState.all_ids.indexOf(action.postId);
      if (index >= 0) {
        newState.all_ids.splice( index, 1 );
      }
      newState.by_id[action.postId] = undefined;
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
import {
  RECEIVE_POSTS,
  RECEIVE_POST,
  REMOVE_POST,
} from './../actions/post';
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
    default:
      return state;
  }
};
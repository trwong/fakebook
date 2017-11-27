import {
  RECEIVE_COMMENTS,
  RECEIVE_COMMENT,
  REMOVE_COMMENT,
} from './../actions/comment';
import merge from 'lodash/merge';

export default (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_COMMENTS:
      return action.comments;
    case RECEIVE_COMMENT:
      console.log("all_ids", newState.all_ids);
      newState.all_ids.push(action.comment.id);
      newState.by_id[action.comment.id] = action.comment;
      return newState;
    case REMOVE_COMMENT:
      let index = newState.all_ids.indexOf(action.commentId);
      if (index >= 0) {
        newState.all_ids.splice( index, 1 );
      }
      newState[action.commentId] = undefined;
      return newState;
    default:
      return state;
  }
};
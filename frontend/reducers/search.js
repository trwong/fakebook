import {
  RECEIVE_SEARCH_RESULT,
} from './../actions/search';

export default (state=[], action) => {
  console.log(action);
  switch (action.type) {
    case RECEIVE_SEARCH_RESULT:
      return action.users;
    default:
      return state;
  }
};
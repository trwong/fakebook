import { filterUsers } from "./../util/user_util";

export const RECEIVE_SEARCH_RESULT = "RECEIVE_SEARCH_RESULT";

// actions
const receiveSearchResult = users => ({
  type: RECEIVE_SEARCH_RESULT,
  users
});

// thunk action creators
export const searchUsers = query => dispatch => (
  filterUsers(query).then( users => dispatch(receiveSearchResult(users)))
);
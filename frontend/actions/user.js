import { getUser } from "./../util/user_util";

export const RECEIVE_USER = "RECEIVE_USER";

// actions
const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

// thunk action creators
export const fetchUser = userId => dispatch => {
  getUser(userId).then( user => dispatch(receiveUser(user)));
};
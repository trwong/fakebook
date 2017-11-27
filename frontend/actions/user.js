import { getUser, patchUser } from "./../util/user_util";

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

export const updateUser = user => dispatch => {
  patchUser(user).then( newUser => dispatch(receiveUser(newUser)));
};
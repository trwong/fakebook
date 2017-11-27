import { getUsers, getUser, patchUser } from "./../util/user_util";

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USERS = "RECEIVE_USERS";

// actions
const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
});

// thunk action creators
export const fetchUsers = () => dispatch => {
  getUsers().then( users => dispatch(receiveUsers(users)));
};

export const fetchUser = userId => dispatch => {
  getUser(userId).then( user => dispatch(receiveUser(user)));
};

export const updateUser = user => dispatch => {
  patchUser(user).then( newUser => dispatch(receiveUser(newUser)));
};
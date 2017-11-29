import {
  postUser,
  postSession,
  deleteSession,
  fetchCurrentUser
} from './../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

// actions
const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user,
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

// thunk action creators
export const createNewUser = formUser => dispatch => (
  postUser(formUser).then(user => (
    dispatch(receiveCurrentUser(user))
    ), err => (dispatch(receiveSessionErrors(err.responseJSON)))
  )
);

export const login = formUser => dispatch => (
  postSession(formUser)
    .then(user => dispatch(receiveCurrentUser(user)), err => (
      dispatch(receiveSessionErrors(err.responseJSON))
    )
  )
);

export const logout = () => dispatch => (
  deleteSession()
    .then(() => dispatch(logoutCurrentUser())),
    errors => dispatch(receiveSessionErrors(errors.responseJSON))
);

export const getCurrentUser = userId => dispatch => (
  fetchCurrentUser(userId)
    .then(user => dispatch(receiveCurrentUser(user)))
);
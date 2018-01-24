import {
  postLike,
  deleteLike,
} from './../util/like_utils';

export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";

// actions
const receiveLike = like => ({
  type: RECEIVE_LIKE,
  like
});

const removeLike = like => ({
  type: REMOVE_LIKE,
  like,
});

// thunk action creators
export const createLike = like => dispatch => {
  postLike(like).then( newLike => dispatch(receiveLike(newLike)));
};

export const destroyLike = like => dispatch => {
  removeLike(like).then( () => dispatch(removeLike(like)));
};
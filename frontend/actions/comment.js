import {
  getComments,
  getComment,
  postComment,
  patchComment,
  deleteComment
} from "./../util/comment_utils.jsx";

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

// actions
const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments,
});

const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment,
});

const removeComment = commentId => ({
  type: REMOVE_COMMENT,
  commentId,
});

// thunk action creators

export const fetchComments = postId => dispatch => {
  getComments(postId).then( comments => dispatch(receiveComments(comments)));
};

export const fetchComment = (postId, commentId) => dispatch => {
  getComment(postId, commentId).then( comment => dispatch(receiveComment(comment)));
};

export const createComment = (postId, comment) => dispatch => {
  postComment(postId, comment).then( newComment => dispatch(receiveComment(newComment)));
};

export const updateComment = (postId, comment) => dispatch => {
  patchComment(postId, comment).then( newComment => dispatch(receiveComment(newComment)));
};

export const destroyComment = (postId, commentId) => dispatch => {
  deleteComment(postId, commentId).then( () => dispatch(removeComment(commentId)));
};

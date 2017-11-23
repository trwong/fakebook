import {
  getPosts,
  getPost,
  postPost,
  updatePost,
  deletePost
 } from './../util/post_utils';

 export const RECEIVE_POSTS = "RECEIVE_POSTS";
 export const RECEIVE_POST = "RECEIVE_POST";
 export const REMOVE_POST = "REMOVE_POST";

//  actions
const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});

const receivePost = post => ({
  type: RECEIVE_POST,
  post,
});

const removePost = postId => ({
  type: REMOVE_POST,
  postId,
});

// thunk action creators
export const fetchPosts = post => dispatch => {
  getPosts().then( posts => dispatch(receivePosts));
};

export const fetchPost = postId => dispatch => {
  getPost(postId).then( post => dispatch(receivePost(post)));
};

export const createPost = post => dispatch => {
  postPost(post).then( newPost => dispatch(receivePost(newPost)));
};

export const editPost = post => dispatch => {
  updatePost(post).then( () => dispatch(receivePost(post)));
};

export const destroyPost = postId => dispatch => {
  deletePost(postId).then( () => dispatch(removePost(postId)));
};
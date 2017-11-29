import {
  fetchFriends,
  postFriend,
  patchFriend,
  destroyFriend,
} from './../util/friend_utils';

export const RECEIVE_FRIENDS = "RECEIVE_FRIENDS";
export const REMOVE_FRIEND = "REMOVE_FRIEND";

// action
const receiveFriends = friends => ({
  type: RECEIVE_FRIENDS,
  friends,
});


// thunk action creators

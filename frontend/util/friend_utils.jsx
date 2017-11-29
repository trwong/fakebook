export const fetchFriends = user_id => (
  $.ajax({
    url: "/api/friends",
    data: { user_id },
  })
);

export const postFriend = (receiverId, requestorId) => (
  $.ajax({
    url: `/api/users/${receiverId}/friends`,
    method: "POST",
    data: {
      friend: {
        status: "pending",
        requestor_id: requestorId,
        receiver_id: receiverId,
      }
    },
  })
);

export const patchFriend = (receiverId, requestorId, status) => (
  $.ajax({
    url: `/api/users/${receiverId}/friends/${requestorId}`,
    method: "PATCH",
    data: {
      friend: {
        status: status,
        requestor_id: requestorId,
        receiver_id: receiverId,
      }
    },
  })
);

export const destroyFriend = (receiverId, requestorId) => (
  $.ajax({
    url: `/api/users/${receiverId}/friends/${requestorId}`,
    method: "DELETE",
    data: {
      friend: {
        requestor_id: requestorId,
        receiver_id: receiverId,
      }
    },
  })
);


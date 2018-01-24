export const postLike = like => (
  $.ajax({
    method: 'POST',
    url: '/api/likes',
    data: { like },
  })
);

export const deleteLike = like => (
  $.ajax({
    method: 'DELETE',
    url: '/api/likes/0',
    data: { like },
  })
);

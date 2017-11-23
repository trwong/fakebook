export const getPost = postId => (
  $.ajax({
    url: `/api/posts/${postId}`,
  })
);

export const getPosts = () => (
  $.ajax({
    url: `/api/posts`,
  })
);

export const createPost = post => (
  $.ajax({
    method: 'POST',
    url: `/api/posts`,
    data: { post },
  })
);

// BUG/TODO will a post have its own id when updating? failing postmates testing
export const updatePost = post => (
  $.ajax({
    method: 'PATCH',
    url: `/api/posts/${post.id}`,
    data: { post },
  })
);

export const deletePost = postId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/posts/${postId}`,
  })
);
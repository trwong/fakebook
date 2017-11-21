export const postUser = user => (
  $.ajax({
    url: "/api/users",
    method: "POST",
    data: { user },
  })
);

export const postSession = user => (
  $.ajax({
    url: "/api/sessions",
    method: "POST",
    data: { user },
  })
);

export const deleteSession = () => (
  $.ajax({
    url: "/api/sessions",
    method: "DELETE",
  })
);


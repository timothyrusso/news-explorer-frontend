export const BASE_URL =
  "https://api.newsexplorer-timothyrusso.students.nomoreparties.sbs";

const checkResponse = (res) => {
  if (res.ok) {
    console.log(
      `URL: ${res.url}
Status: ${res.statusText}
Status code: ${res.status}`
    );
    return res.json();
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }
};

export const register = (email, password, name) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, name }),
  })
    .then(checkResponse)
    .then((res) => {
      return res;
    });
};

export const authorize = (password, email) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password, email }),
  })
    .then(checkResponse)
    .then((data) => {
      if (data.token) {
        localStorage.setItem("jwt", data.token);
        localStorage.setItem("email", email);
        return data;
      } else {
        return;
      }
    });
};

export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then(checkResponse)
    .then((data) => data);
};

export const getArticles = () => {
  return fetch(`${BASE_URL}/articles`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  }).then(checkResponse);
};

export const saveArticles = ({
  keyword,
  title,
  text,
  date,
  source,
  link,
  image,
}) => {
  return fetch(`${BASE_URL}/articles`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    body: JSON.stringify({
      keyword,
      title,
      text,
      date,
      source,
      link,
      image,
    }),
  }).then(checkResponse);
};

export const deleteArticles = ({ articleId }) => {
  return fetch(`${BASE_URL}/articles/${articleId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  }).then(checkResponse);
};

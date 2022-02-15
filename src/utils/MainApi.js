import { ERR } from '../utils/constants'
const BASE_URL = 'https://api.movie-list.nomoredomains.xyz'

function handleResponse(res) {
  if (!res.ok) {
    return Promise.reject(ERR)
  }
  return res.json();
}

export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({ name, email, password })
  })
    .then(handleResponse)
};

export const login = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ email, password })
  })
    .then(handleResponse)
};

export const getUserInfo = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
    credentials: 'include',
  })
    .then(handleResponse)
};

export const updateUserInfo = (data) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    credentials: 'include',
    headers: {
      'Content-type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(data),
  })
    .then(handleResponse)
}

export const addMovie = (
  country,
  director,
  duration,
  year,
  description,
  image,
  trailer,
  thumbnail,
  movieId,
  nameRU,
  nameEN
  ) => {
  return fetch(`${BASE_URL}/movies`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({
      country,
      director,
      duration,
      year,
      description,
      image,
      trailer,
      thumbnail,
      movieId,
      nameRU,
      nameEN })
  })
    .then(handleResponse)
};

export const getMovies = () => {
  return fetch(`${BASE_URL}/movies`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
    credentials: 'include',
  })
    .then(handleResponse)
};

export const deleteMovie = (movieID) => {
  return fetch(`${BASE_URL}/movies/${movieID}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
    },
    credentials: 'include',
  })
    .then(handleResponse)
}

export const logOut = () => {
  return fetch(`${BASE_URL}/logout`, {
    method: 'GET',
    credentials: 'include',
  })
    .then(handleResponse)
};
import { MOVIE_URL, ERR } from '../utils/constants'

function handleResponse(res) {
  if (!res.ok) {
    return Promise.reject(ERR)
  }
  return res.json();
}

export const getMovies = () => {
  return fetch(`${MOVIE_URL}/beatfilm-movies`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(handleResponse)
}
import './MoviesCard.css'
import { useState, useEffect } from 'react';

export function MoviesCard({ movie, handleLikeMovie, userMovies, deleteMovie, movieImage, trailer, isSavedMoviesPage }) {

  const [isLiked, setIsLiked] = useState(false)

  useEffect(() => {
    if (userMovies.length >= 1) {
      const userMoviesId = userMovies.map(movie => { return movie.movieId })
      if (userMoviesId.includes(movie.id)) {
        setIsLiked(true)
      }
    }
  }, [userMovies])


  const handleDeleteMovie = (movie) => {
    deleteMovie(movie._id)
  }


const isUrl = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;

  const hendleLiked = (movie) => {

    if (isLiked) {
      setIsLiked(false)
      const currentMovie = userMovies.filter(item => { return item.movieId === movie.id })
      if (currentMovie) {
        deleteMovie(currentMovie.map(f => { return f._id }))
      }
    }

    if (!isLiked) {
      setIsLiked(true)

      if (movie.country === null) {
        movie.country = 'неисзвестно'
      }
      if (movie.director === null) {
        movie.director = 'неисзвестно'
      }
      if (movie.duration === null) {
        movie.duration = '00'
      }
      if (movie.year === null) {
        movie.year = 'неисзвестно'
      }
      if (movie.description === null) {
        movie.description = 'неисзвестно'
      }
      if (movie.nameRU === null) {
        movie.nameRU = 'неисзвестно'
      }
      if (movie.nameEN === null) {
        movie.nameEN = 'неисзвестно'
      }
      if (movie.image.url === null) {
        movie.image.url = 'https://ic.pics.livejournal.com/rissina/10967916/510268/510268_900.jpg'
      }
      if (movie.image.formats.thumbnail.url === null) {
        movie.image.formats.thumbnail.url = 'https://ic.pics.livejournal.com/rissina/10967916/510268/510268_900.jpg'
      }
      if (!isUrl.test(movie.trailerLink)) {
        movie.trailerLink = 'https://www.youtube.com/watch?v=_0m8K66sQ2s'
      }

      handleLikeMovie(movie)
    }
  }

  let duration = movie.duration;
  let hour = duration / 60 ^ 0;
  if (hour) {
    let min = duration % 60;
    if (min < 10) min = '0' + min;
    duration = hour + ' ч ' + min + ' м';
  } else {
    duration = duration + ' м';
  }

  return (
    <>

      <li className="card">
        <a className="card__link" href={`${trailer}`} target="_blank" rel="noreferrer">
          <div className="card__image" style={{ backgroundImage: `url(${movieImage})` }}></div>
        </a>
        <div className="card__info">
          <h2 className="card__title">{movie.nameRU}</h2>
          {!isSavedMoviesPage ? <button className={`hover-button card__like ${isLiked ? `card-like-active` : ``}`} onClick={() => hendleLiked(movie)} type="button" aria-label="Нравится" /> :
            <button className="hover-button card__delete" type="button" aria-label="Удалить" onClick={() => handleDeleteMovie(movie)} />}
          <p className="card__time">{duration}</p>
        </div>
      </li>

    </>
  );

}
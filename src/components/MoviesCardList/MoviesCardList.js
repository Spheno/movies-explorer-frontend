import './MoviesCardList.css'
import { MoviesCard } from '../MoviesCard/MoviesCard';
import { MOVIE_URL, EMPTY } from '../../utils/constants'

export function MoviesCardList({ movies, visible, isEmpty, err, handleLikeMovie, userMovies, deleteMovie, isSavedMoviesPage }) {

  return (
    <section className="page__container">
      <ul className="card-list">

        {!isSavedMoviesPage ?
          !isEmpty ? <p className="card__null">{err || EMPTY}</p> : movies.slice(0, visible).map(movie => {
            return <MoviesCard
              key={movie.id}
              movie={movie}
              movieImage={`${`${MOVIE_URL}${movie.image.url}`}`}
              trailer={movie.trailerLink}
              handleLikeMovie={handleLikeMovie}
              userMovies={userMovies}
              deleteMovie={deleteMovie}
              isSavedMoviesPage={isSavedMoviesPage}
            />
          })
          :
          !isEmpty ? <p className="card__null">{err || EMPTY}</p> : userMovies.map(movie => {
            return <MoviesCard
              key={movie._id}
              movie={movie}
              movieImage={movie.image}
              trailer={movie.trailer}
              userMovies={userMovies}
              deleteMovie={deleteMovie}
              isSavedMoviesPage={isSavedMoviesPage}
            />
          })
        }

      </ul>
    </section>
  );

}
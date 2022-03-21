import { SearchForm } from '../SearchForm/SearchForm';
import { FilterCheckbox } from '../FilterCheckbox/FilterCheckbox';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';
import { Preloader } from '../Preloader/Preloader';

export function SavedMovies({ movies,
  onSearch,
  handleIsShort,
  short,
  err,
  handleLikeMovie,
  userMovies,
  deleteMovie,
  handleSearchShort,
  isEmpty,
  isSavedMoviesPage,
  isLoading,
}) {

  return (
    <main>
      <SearchForm onSearch={onSearch} isSavedMoviesPage={isSavedMoviesPage} />
      <FilterCheckbox handleIsShort={handleIsShort} short={short} handleSearchShort={() => {handleSearchShort()}} />
      {isLoading ? <Preloader /> : <MoviesCardList
      movies={movies}
      err={err}
      handleLikeMovie={handleLikeMovie}
      userMovies={userMovies}
      deleteMovie={deleteMovie}
      isEmpty={isEmpty}
      isSavedMoviesPage={isSavedMoviesPage}
      />}
    </main>
  );
}
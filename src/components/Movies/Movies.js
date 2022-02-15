import { SearchForm } from '../SearchForm/SearchForm';
import { FilterCheckbox } from '../FilterCheckbox/FilterCheckbox';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';
import { ButtonMore } from '../ButtonMore/ButtonMore';
import { useState, useEffect } from 'react';
import { Preloader } from '../Preloader/Preloader';
import { useSize } from '../../hooks/useSize';

export function Movies({ movies,
  onSearch,
  query,
  handleIsShort,
  short,
  isLoading,
  err,
  handleLikeMovie,
  userMovies,
  deleteMovie,
  isEmpty,
  handleSearchShort,
  isSavedMoviesPage }) {

  const width = useSize()

  const [visible, setVisible] = useState()
  const [more, setMore] = useState()

  useEffect(() => {
    handleWindowSize()
  }, [width, movies]);

  const handleWindowSize = () => {
    if (width > 670 && width < 1205) {
      setVisible(8)
      setMore(2)
    }
    if (width <= 669) {
      setVisible(5)
      setMore(2)
    }
    if (width >= 1205) {
      setVisible(12)
      setMore(3)
    }
  }

  const showMoreMovies = () => {
    setVisible((prevValue) => prevValue + more);
  }

  const [isMore, setIsMore] = useState(true)

  useEffect(() => {
    if (visible >= movies.length) {
      setIsMore(false)
    } else {
      setIsMore(true)
    }
  }, [visible, movies])

  return (
    <main>
      <SearchForm onSearch={onSearch} query={query} isSavedMoviesPage={isSavedMoviesPage} />
      <FilterCheckbox handleIsShort={handleIsShort} short={short} handleSearchShort={() => { handleSearchShort() }} />
      {isLoading ? <Preloader /> : <MoviesCardList
        movies={movies}
        visible={visible}
        isEmpty={isEmpty}
        err={err}
        handleLikeMovie={handleLikeMovie}
        userMovies={userMovies}
        deleteMovie={deleteMovie}
        isSavedMoviesPage={isSavedMoviesPage}
      />}
      <ButtonMore showMore={showMoreMovies} isMore={isMore} />
    </main>
  );
}



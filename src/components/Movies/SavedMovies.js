import { SearchForm } from '../SearchForm/SearchForm';
import { FilterCheckbox } from '../FilterCheckbox/FilterCheckbox';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';
import { useState, useEffect } from 'react';

import { Preloader } from '../Preloader/Preloader';

export function Movies({ movies,
  onSearch,
  query,
  hadleIsShort,
  short,
  isLoading,
  err,
  handleLikeMovie,
  userMovies,
  deleteMovie }) {

    
  function useSize() {
    const [windowSize, setWindowSize] = useState(window.innerWidth);
    useEffect(() => {
      const hendleResize = () => {
        setWindowSize(window.innerWidth);
      };
      const time = () => {
        setTimeout(hendleResize, 5000)
      } 
      window.addEventListener("resize", time);
      return () => {
        window.removeEventListener("resize", time);
      }
    }, [])
    return windowSize
  }

 const width = useSize()

  useEffect(() => {
    hendleWindowSize()
  }, [width, movies]);

  const hendleWindowSize = () => {
    if (width > 670 && width < 1205) {
      setVisible(8)
    }
    if (width <= 669) {
      setVisible(5) 
    }
    if (width >= 1205) {
      setVisible(12)
    }
  }

  const [visible, setVisible] = useState()
const [isVisible, setIsVisible] =useState(true)


useEffect(() => {
  if(movies.length === 0) {
    setIsVisible(false)
  } else {
    setIsVisible(true)
  }
}, [movies])


  return (
    <main>
      <SearchForm onSearch={onSearch} query={query} />
      <FilterCheckbox hadleIsShort={hadleIsShort} short={short} />
      <MoviesCardList
      movies={movies}
      visible={visible}
      isVisible={isVisible}
      err={err}
      handleLikeMovie={handleLikeMovie}
      userMovies={userMovies}
      deleteMovie={deleteMovie}
      />
    </main>
  );
}
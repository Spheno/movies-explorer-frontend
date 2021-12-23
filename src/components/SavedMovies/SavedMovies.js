import { SearchForm } from '../SearchForm/SearchForm';
import { FilterCheckbox } from '../FilterCheckbox/FilterCheckbox';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';

export function SavedMovies() {

  return (
     <main>
     <SearchForm />
     <FilterCheckbox />
     <MoviesCardList />
     </main>
  );

}
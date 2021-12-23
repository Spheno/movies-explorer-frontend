import { SearchForm } from '../SearchForm/SearchForm';
import { FilterCheckbox } from '../FilterCheckbox/FilterCheckbox';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';
import { ButtonMore } from '../ButtonMore/ButtonMore';

export function Movies() {

  return (
     <main>
     <SearchForm />
     <FilterCheckbox />
     <MoviesCardList />
     <ButtonMore />
     </main>
  );

}
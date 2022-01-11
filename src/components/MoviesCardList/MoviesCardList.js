import './MoviesCardList.css'
import { MoviesCard } from '../MoviesCard/MoviesCard';

export function MoviesCardList() {

  return (
    <section className="page__container">
      <ul className="card-list">

        <MoviesCard />

      </ul>
    </section>
  );

}


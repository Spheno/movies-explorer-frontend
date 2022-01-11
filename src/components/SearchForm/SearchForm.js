import './SearchForm.css';

export function SearchForm() {

  return (
    <>
      <section className="search page__container">
        <input className="search__input input" type="text" name="search" minLength="2" id="search" placeholder="Фильм" required />
        <button className="search__button hover-button" type="submit"></button>
      </section>
    </>
  );
}
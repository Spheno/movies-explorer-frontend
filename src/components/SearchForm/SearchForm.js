import './SearchForm.css';

export function SearchForm() {

  return (
    <>
      <section className="search page__container">
        <input className="search__input" type="text" name="search" minLength="1" id="search" placeholder="Фильм" />
        <button className="search__button hover-button" type="submit"></button>
      </section>
    </>
  );

}
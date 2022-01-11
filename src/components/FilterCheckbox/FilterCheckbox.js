import './FilterCheckbox.css';

export function FilterCheckbox() {

  return (
    <>
      <section className="checkbox page__container">
        <div className="checkbox__container">
        <input className="checkbox__input" type="checkbox" name="short_movie" id="short_movie"  />
        <label className="checkbox__label" for="short_movie">Коротметражки</label>
        </div>
      </section>
    </>
  );

}
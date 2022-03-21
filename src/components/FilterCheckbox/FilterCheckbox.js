import './FilterCheckbox.css';
import { useState, useEffect } from 'react';

export function FilterCheckbox({ handleIsShort, short, handleSearchShort }) {

  const [isShort, setIsShort] = useState(short)

  const handleChange = (e) => {
    setIsShort(e.target.checked);
  };

  useEffect(() => {
    handleIsShort(
      isShort
    );
  }, [isShort])


  return (
    <>
      <section className="checkbox page__container">
        <div className="checkbox__container">
          <input className="checkbox__input" type="checkbox" name="short_movie" id="short_movie" onChange={(e) => handleChange(e)} checked={isShort} onClick={(e) => { handleSearchShort(e) }} />
          <label className="checkbox__label" htmlFor="short_movie">Коротметражки</label>
        </div>
      </section>
    </>
  );

}
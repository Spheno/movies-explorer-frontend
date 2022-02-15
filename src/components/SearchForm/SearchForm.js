import './SearchForm.css';
import { useState, useEffect } from 'react';
import { useFormWithValidation } from '../../hooks/useFormWithValidation'

export function SearchForm({ onSearch, query, isSavedMoviesPage }) {

  const { values, handleChange, resetForm } = useFormWithValidation();

  const [isErr, setIsErr] = useState(false)

  const handleIsErr = () => {
    setIsErr(false)
  }

  function handleSubmit(e) {
    e.preventDefault();

    if(isSavedMoviesPage) {
      onSearch({
        searchQuery: values.searchQuery,
      });
      values.searchQuery = '';
    } else {
      if (values.searchQuery.length === 0) {
        setIsErr(true)
      } else {
        onSearch({
          searchQuery: values.searchQuery,
        });
      }
    }
  }

  useEffect(() => {
    resetForm({
      searchQuery: query,
    })
  }, [query])

  return (
    <>
      <form className="search page__container" onSubmit={(e) => handleSubmit(e)}>
        <input className="search__input input" type="text" name="searchQuery" id="searchQuery" placeholder="Фильм"
          value={values.searchQuery || ""} onChange={(e) => handleChange(e)} onClick={handleIsErr} />
        {isErr ? <span className="form__input-error search__error" id="searchQuery-error">Нужно ввести ключевое слово</span> : ''}
        <button className="search__button hover-button" type="submit"></button>
      </form>
    </>
  );
}
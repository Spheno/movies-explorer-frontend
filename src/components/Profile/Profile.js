import './Profile.css';
import { useContext, useState, useEffect } from 'react'
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormWithValidation } from '../../hooks/useFormWithValidation'

export function Profile({ onLogOut, onUpdateUser, err, okMessage }) {

  const currentUser = useContext(CurrentUserContext);

  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  const [isClicked, setIsClicked] = useState(false)

  const hendleClicked = () => {
    setIsClicked(!isClicked);
  }

  useEffect(() => {
    resetForm({
      name: currentUser.name,
      email: currentUser.email
    })
  }, [currentUser])

  function handleSubmit(e) {
    e.preventDefault();
    setIsOk(false)
    setTimeout(handleOkMessage, 5000)
    onUpdateUser(
      {
        name: values.name,
        email: values.email,
      }
    );
  }

  const [isEmailChange, setIsEmailChange] = useState(false)
  const [isNameChange, setIsNameChange] = useState(false)

  function handleValueChange() {
    setIsEmailChange(currentUser.email !== values.email)
    setIsNameChange(currentUser.name !== values.name)
  }

  useEffect(() => {
    handleValueChange()
  }, [values.email, values.name])

  const [isOk, setIsOk] = useState(true)

  function handleOkMessage() {
    setIsOk(true)
    setIsClicked(!isClicked);
  }

  return (
    <main>
      <section className="profile">

        <h2 className="profile__title">Привет, {currentUser.name}!</h2>

        <form name="profile" className="profile__form-container" id="profile" onSubmit={(e) => handleSubmit(e)} >

          <label className="profile__form-label" htmlFor="name">
            Имя
            <input type="text" name="name" minLength="2" maxLength="30" className="profile__form-input" id="name" placeholder="Имя" pattern="[A-Za-zА-Яа-яЁё\-\s]+$" required
              disabled={isClicked ? false : true}
              value={values.name || ""}
              onChange={(e) => handleChange(e)}></input>
          </label>

          <label className="profile__form-label" htmlFor="email">
            E-mail
            <input type="email" name="email" className="profile__form-input" id="email" placeholder="E-mail" minLength="2" maxLength="30" pattern="^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$" required
              disabled={isClicked ? false : true}
              value={values.email || ""}
              onChange={(e) => handleChange(e)}></input>
          </label>

        </form>

        {!isClicked
          ? <div className="profile__button-container">
            <button className="profile__button profile__button_type_edit hover-button" type="button" onClick={hendleClicked}>Редактировать</button>
            <button className="profile__button profile__button_type_logout hover-button" type="button" aria-label="Выйти" onClick={(e) => {onLogOut(e)}} >Выйти</button>
          </div>
          : <div className="profile__button-container">
            <span className={`message message_ok ${isOk ? "hidden" : ''}`} id="profile-error">{okMessage || ""}</span>
            <span className="message message_err" id="profile-error">{errors.name || errors.email || err || ""}</span>
            <button className={`profile__button-submit font-s profile__button-submit_type_signin hover-button ${(isValid && (isNameChange || isEmailChange)) ? '' : "button__disabled"}`} type="submit" form="profile">Сохранить</button>
          </div>}

      </section >
    </main>
  );

};
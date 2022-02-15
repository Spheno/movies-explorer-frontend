import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import logo from '../../images/logo.svg';
import { useFormWithValidation } from '../../hooks/useFormWithValidation'

export function Login({ onLogIn, err, isLoggedIn }) {

  const navigate = useNavigate();

  useEffect(() => {
    if(isLoggedIn) {
      navigate("/movies")
    }
  }, [])

  const { values, handleChange, errors, isValid } = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    onLogIn(
      {
        email: values.email,
        password: values.password
      }
    );
  }

  return (
    <main>
      <section className="form login">

        <div className="form__heading">
          <Link className="hover-link" to="/">
            <img className="form__logo" alt="логотип" src={logo} />
          </Link>
          <h2 className="form__title">Рады видеть!</h2>
        </div>

        <form name="signin" id="signin" className="form__container" onSubmit={(e) => handleSubmit(e)} >
          <label className="form__label" htmlFor="email">
            E-mail
            <input type="email" name="email" className="form__input input" id="email"
              placeholder="E-mail" minLength="2" maxLength="30" pattern="^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$" required
              value={values.email || ""} onChange={(e) => handleChange(e)} />
            <span className="form__input-error" id="email-error">
              {errors.email || ""}
            </span>
          </label>
          <label className="form__label" htmlFor="password">
            Пароль
            <input type="password" name="password" minLength="8" className="form__input input" id="password"
              placeholder="Пароль" required value={values.password || ""} onChange={(e) => handleChange(e)} />
            <span className="form__input-error" id="password-error">
              {errors.password || ""}
            </span>
          </label>
        </form>

        <div className="form__button-container">
          <span className="message message_err" id="error">{err || ""}</span>
          <button className={`form__button-submit font-s form__button-submit_type_signup hover-button ${!isValid && "button__disabled"}`} type="submit" form="signin">Войти</button>
          <p className="form__text font-s">Ещё не зарегистрированы?</p>
          <Link className="form__link font-s hover-link" to="/signup">Регистрация</Link>
        </div>

      </section >
    </main>
  );

};
import './Register.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

export function Register() {

  return (
    <main>
      <section className="form register">

        <div className="form__heading">
          <Link className="hover-link" to="/">
            <img className="form__logo" alt="логотип" src={logo} />
          </Link>
          <h2 className="form__title">Добро пожаловать!</h2>
        </div>

        <form name="signin" className="form__container" >
          <label className="form__label" for="name">
            Имя
            <input type="text" name="name" className="form__input input" id="name"
              placeholder="Имя" minLength="2" maxLength="30" required />
            <span class="form__input-error" id="name-error"></span>
          </label>
          <label className="form__label" for="email">
            E-mail
            <input type="email" name="email" className="form__input input" id="email"
              placeholder="E-mail" minLength="2" maxLength="30" required />
            <span class="form__input-error" id="email-error"></span>
          </label>
          <label className="form__label" for="password">
            Пароль
            <input type="password" name="password" minLength="3" className="form__input input" id="password"
              placeholder="Пароль" required />
            <span class="form__input-error" id="password-error"></span>
          </label>
        </form>

        <div className="form__button-container">
          <button className="form__button-submit font-s form__button-submit_type_signup hover-button" type="submit">Зарегистрироваться</button>
          <p className="form__text font-s">Уже зарегистрированы?</p>
          <Link className="form__link font-s hover-link" to="/signin">Войти</Link>
        </div>

      </section >
    </main>
  );

};
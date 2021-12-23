import './Login.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

export function Login() {

  return (
    <main>
      <section className="form login">

        <div className="form__heading">
          <Link className="hover-link" to="/">
            <img className="form__logo" alt="логотип" src={logo} />
          </Link>
          <h2 className="form__title">Рады видеть!</h2>
        </div>

        <form name="signin" className="form__container" >
          <label className="form__label" for="email">
            E-mail
            <input type="email" name="email" className="form__input" id="email"
              placeholder="E-mail" minLength="2" maxLength="30" required />
            <span class="form__input-error" id="email-error"></span>
          </label>
          <label className="form__label" for="password">
            Пароль
            <input type="password" name="password" minLength="3" className="form__input" id="password"
              placeholder="Пароль" required />
            <span class="form__input-error" id="password-error"></span>
          </label>
        </form>

        <div className="form__button-container">
          <button className="form__button-submit font-s form__button-submit_type_signin hover-button" type="submit">Войти</button>
          <p className="form__text font-s">Ещё не зарегистрированы?</p>
          <Link className="form__link font-s hover-link" to="/signup">Регистрация</Link>
        </div>

      </section >
    </main>
  );

};
import logo from '../../images/logo.svg';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Header.css';
import { Navigation } from '../Navigation/Navigation';

export function Header({ isLoggedIn }) {

  const navigate = useNavigate();

  const goLogin = () => {
    navigate('/signin');
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const hendleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  let location = useLocation();

  const [isMain, setIsMain] = useState(false)

  useEffect(() => {
    if (location.pathname === '/') {
      setIsMain(true);
    } else {
      setIsMain(false);
    }
  }, [location])

  return (
    <header className={`header font-header ${isMain ? `header__type_main` : `header__type_other`}`}>

      <Link className="hover-link" to="/">
        <img className="form__logo" alt="логотип" src={logo} />
      </Link>

      <div className={`header__popup ${isMenuOpen ? 'header__nav-container_type_open' : ''}`}></div>

      {isLoggedIn ? <>
        <div className={`header__nav-container ${isMenuOpen ? 'header__nav-container_type_open' : ''}`}>
          
          <Navigation />

          <Link className="header__link header__profile hover-link" to="/profile">
            Аккаунт
            <div className="header__profile-icon"></div>
          </Link>
        </div>
        <button className={`header__menu hover-button ${isMenuOpen ? 'header__menu_type_open' : ''}`} onClick={hendleMenuOpen} type="button">
          <span className="header__menu-line"></span>
        </button>
      </> : <div className="header__nav">
        <Link className="header__link hover-link" to="/signup">Регистрация</Link>
        <button className="header__button hover-button" onClick={goLogin} type="button">Войти</button>
      </div>}

    </header>

  );

};

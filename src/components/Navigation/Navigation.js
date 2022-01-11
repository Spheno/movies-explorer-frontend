import { NavLink } from 'react-router-dom';
import './Navigation.css';

export function Navigation() {

  return (
    <nav className="navigation">
            <NavLink to="/" className="navigation__link font-header-nav hover-link">Главная</NavLink>
            <NavLink className="navigation__link font-header-nav hover-link" to="/movies">Фильмы</NavLink>
            <NavLink className="navigation__link font-header-nav hover-link" to="/saved-movies">Сохраненные фильмы</NavLink>
          </nav>

          );

};
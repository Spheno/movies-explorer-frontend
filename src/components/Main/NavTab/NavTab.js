import './NavTab.css';

export function NavTab() {

  return (
    <nav className="nav-tab">
      <a className="nav-tab__link hover-link" href="#project">О пректе</a>
      <a className="nav-tab__link hover-link" href="#techs">Технлогии</a>
      <a className="nav-tab__link hover-link" href="#student">Студент</a>
    </nav>

  );
}
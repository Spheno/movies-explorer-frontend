import './Footer.css';

export function Footer() {

  return (

    <footer className="footer font-footer">
      <div className="footer__text-container">
        <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      </div>
      <p className="footer__copyright">&copy; {new Date().getFullYear()}</p>
      <a className="footer__link hover-link" href="https://practicum.yandex.ru">Яндекс.Практикум</a>
      <a className="footer__link hover-link" href="https://github.com/">Github</a>
      <a className="footer__link hover-link" href="https://www.facebook.com/yandex.practicum">Facebook</a>
    </footer >

  );

};
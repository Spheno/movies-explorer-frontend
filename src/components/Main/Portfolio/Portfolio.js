import './Portfolio.css';

export function Portfolio() {

  return (
    <section className="portfolio page__container">

      <h2 className="portfolio__title">Портфолио</h2>

      <a className="portfolio__link" href="https://github.com/Spheno/how-to-learn" target="_blank" rel="noreferrer">
        <div className="portfolio__link-container hover-link">
          <p className="portfolio__link-text">Статичный сайт</p>
        </div>
      </a>
      <a className="portfolio__link" href="https://github.com/Spheno/russian-travel" target="_blank" rel="noreferrer">
        <div className="portfolio__link-container hover-link">
          <p className="portfolio__link-text">Адаптивный сайт</p>
        </div>
      </a>
      <a className="portfolio__link" href="https://github.com/Spheno/react-mesto-api-full" target="_blank" rel="noreferrer">
        <div className="portfolio__link-container hover-link">
          <p className="portfolio__link-text">Одностраничное приложение</p>
        </div>
      </a>

    </section>
  );

}

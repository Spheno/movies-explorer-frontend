import './Techs.css';

export function Techs() {

  return (
    <section className="techs page__container" id="techs">
      <div className="techs__title-container title-container">
        <h2 className="techs__title font-h2">Технологии</h2>
      </div>

      <div className="techs__text-container">
        <h3 className="techs__heading font__title ">7 технологий</h3>
        <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      </div>

      <div className="techs__items">
        <div className="techs__item">
          <p className="techs__item-text font-s">HTML</p>
        </div>
        <div className="techs__item">
          <p className="techs__item-text font-s">CSS</p>
        </div>
        <div className="techs__item">
          <p className="techs__item-text font-s">JS</p>
        </div>
        <div className="techs__item">
          <p className="techs__item-text font-s">React</p>
        </div>
        <div className="techs__item">
          <p className="techs__item-text font-s">Git</p>
        </div>
        <div className="techs__item">
          <p className="techs__item-text font-s">Express.js</p>
        </div>
        <div className="techs__item">
          <p className="techs__item-text font-s">MongoDB</p>
        </div>
      </div>

    </section>
  );

}
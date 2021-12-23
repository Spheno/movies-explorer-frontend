import './AboutProject.css';

export function AboutProject() {

  return (
    <section className="about-project page__container" id="project">
      <div className="about-project__title-container title-container">
        <h2 className="about-project__title font-h2">О проекте</h2>
      </div>

      <div className="about-project__text-container">
        <h3 className="about-project__heading">Дипломный проект включал 5 этапов</h3>
        <p className="about-project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
      </div>

      <div className="about-project__text-container">
        <h3 className="about-project__heading">На выполнение диплома ушло 5 недель</h3>
        <p className="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
      </div>

      <div className="about-project__scale">
        <div className="about-project__scale-back">
          <p className="about-project__scale-text font-s">1 неделя</p>
        </div>
        <div className="about-project__scale-front">
          <p  className="about-project__scale-text font-s">4 недели</p>
        </div>
        <p className="about-project__scale-text font-s about-project__scale-text__medium">Back-end</p>
        <p className="about-project__scale-text font-s about-project__scale-text__medium">Front-end</p>
      </div>
    </section>
  );

}
import './AboutMe.css';
import photo from '../../../images/photo.jpg';

export function AboutMe() {

  return (
    <section className="about-me page__container" id="student">
      <div className="about-me__title-container title-container">
        <h2 className="about-me__title font-h2">Студент</h2>
      </div>

      <img className="about-me__photo" alt="фото студента" src={photo} />

      <div className="about-me__text-container">
        <h3 className="about-me__heading font__title">Виталий</h3>
        <p className="about-me__subtitle">Фронтенд-разработчик, 30 лет</p>
        <p className="about-me__text">
          Я родился и живу в Саратове, закончил факультет экономики СГУ.
          У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
          С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке,
          начал заниматься фриланс-заказами и ушёл с постоянной работы.
        </p>
        <a className="about-me__link font-s hover-link" href="https://ru-ru.facebook.com/">Facebook</a>
        <a className="about-me__link font-s hover-link" href="https://github.com/Spheno">Github</a>
      </div>


    </section>
  );

}
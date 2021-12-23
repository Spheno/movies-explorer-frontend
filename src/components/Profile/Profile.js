import './Profile.css';

export function Profile() {

  return (
    <main>
      <section className="profile">

        <h2 className="profile__title">Привет, Виталий!</h2>

        <form name="profile" className="profile__form-container" >
        <label className="profile__form-label" for="name">
            Имя
            <input  type="text" name="name" minLength="2" maxLength="30" className="profile__form-input" id="name" placeholder="Имя" defaultValue="Виталий"/>
          </label>
          <label className="profile__form-label" for="email">
            E-mail
            <input type="email" name="email" className="profile__form-input" id="email" placeholder="E-mail" minLength="2" maxLength="30" defaultValue="pochta@yandex.ru" />
          </label>
        </form>

        <div className="profile__button-container">
          <button className="profile__button profile__button_type_edit hover-button" type="submit">Редактировать</button>
          <button className="profile__button profile__button_type_logout hover-button" type="button" aria-label="Выйти" >Выйти</button>

          <span class="profile__input-error hidden" id="profile-error"></span>
          <button className="profile__button-submit font-s profile__button-submit_type_signin hover-button button__disabled hidden" type="submit">Сохранить</button>
        </div>

      </section >
    </main>
  );

};
# Cервис Movies 📽🎞❤️‍🔥

Сервис, в котором можно найти фильмы по запросу и сохранить в личном кабинете. 🔎

### Функциональность:

Страницы сверстаны по макету в Figma с использованием Flexbox и Grid Layout. 🪢

Реализваны навигация между страницами, регистрация, авторизация и редактирование профиля пользования. 🎭

Роуты /saved-movies, /profile и /movies защищены авторизацией. 🛡

Все поля всех форм валидируются, польтзователь получает сообщения об ошибках. 📌

Созданы асинхронные запросы к API, ⚡

JWT-токен хранится в cookies, 🍪

Настроен прелоадер на время, пока от сервера идёт ответ, 💫

Лайк по иконке лайка отправляет запрос на сохранение фильма в созданном API. Добавленный фильм отображается на странице сохранённых фильмов. 📺

Дизлайк или кнопка удаления на странице сохраненных фильмов отправляет запрос на удаление фильма из созданного API. 💔

## Технологии 🔨

- HTML5
- CSS3
- адаптивная верстка
- семантическая верстка
- JavaScript
- React
- БЭМ

## [Ссылка на API для этого приложения](https://github.com/Spheno/movies-explorer-api)

## Установка ⚙

В удобной для вас папке запустите:

```
git clone https://github.com/Spheno/movies-explorer-frontend.git
```

В папке проекта:

```
npm install
```

```
npm start
```
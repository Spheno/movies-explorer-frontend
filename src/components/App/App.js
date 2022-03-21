import './App.css';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Header } from '../Header/Header';
import { Layout } from '../Layout/Layout';
import { Main } from '../Main/Main';
import { Login } from '../Login/Login';
import { Register } from '../Register/Register';
import { NotFound } from '../NotFound/NotFound';
import { Profile } from '../Profile/Profile';
import { Movies } from '../Movies/Movies';
import { SavedMovies } from '../SavedMovies/SavedMovies';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { ProtectedRoute } from '../../hoc/ ProtectedRoute';
import * as MainApi from '../../utils/MainApi';
import * as MoviesApi from '../../utils/MoviesApi';

import { MOVIE_URL, ERR_REGISTRATION, ERR_LOGIN, ERR_USERINFO, ERR_UPDATEUSER, ERR_GETMOVIE, MESSAGE_OK, ERR } from '../../utils/constants'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') ? JSON.parse(localStorage.getItem('isLoggedIn')) : false)
  const [currentUser, setCurrentUser] = useState({});
  const [isSavedMoviesPage, setIsSavedMoviesPage] = useState(false)
  const [errMessage, setErrMessage] = useState('')

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/saved-movies') {
      setIsSavedMoviesPage(true);
    } else {
      setIsSavedMoviesPage(false);
    }
  }, [location.pathname])

  const handleLoggedIn = () => {
    setIsLoggedIn(true);
  }

  /* Регистрация */

  const handleRegisterUser = ({ name, email, password }) => {
    MainApi.register(name, email, password)
      .then((res) => {
        if (res.email) {
          handleLogIn({ email, password })
          navigate("/movies")
        }
      })
      .catch((err) => {
        return setErrMessage(ERR_REGISTRATION)
      })
  }

  /* Логин */

  const handleLogIn = ({ email, password }) => {
    MainApi.login(email, password)
      .then((res) => {
        if (res) {
          handleLoggedIn()

          navigate("/movies")
        }
      })
      .catch((err) => {
        return setErrMessage(ERR_LOGIN)
      })
  }

  /* Получение данных пользователя */

  const [movies, setMovies] = useState(localStorage.getItem('moviesList') ? JSON.parse(localStorage.getItem('moviesList')) : [])
  const [userMovies, setUserMovies] = useState([])

  useEffect(() => {
    Promise.all([
      MainApi.getUserInfo(),
      MainApi.getMovies(),
    ])
      .then(([userData, movies]) => {
        handleLoggedIn()
        setCurrentUser(userData);
        setUserMovies(movies.data)
      })
      .catch((err) => {
        console.log(ERR_USERINFO);
      })
  }, [isLoggedIn])

  useEffect(() => {
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  useEffect(() => {
    localStorage.setItem("moviesList", JSON.stringify(movies));
  }, [movies]);

  const handleLogOut = (e) => {
    e.preventDefault()
    MainApi.logOut()
      .then((res) => {
        setIsLoggedIn(false);
        setMovies([])
        setQuery('')
        setIsShort(false)
        setSearchMovies([])
        navigate('/');
      })
      .catch((err) => {
        console.log(ERR);
      })
  }

  /* Редактирование данных пользователя */

  const [okMessage, setOkMessage] = useState('');

  const handleUpdateUser = (data) => {
    MainApi.updateUserInfo(data)
      .then((res) => {
        setCurrentUser(res.data);
        setOkMessage(MESSAGE_OK)
      })
      .catch((err) => {
        setErrMessage(ERR_UPDATEUSER)
      })
  }

  /* Поиск фильмов на странице фильмов */

  const [isShort, setIsShort] = useState(localStorage.getItem('short') ? JSON.parse(localStorage.getItem('short')) : '');
  const [searchMovies, setSearchMovies] = useState(localStorage.getItem('searchMoviesList') ? JSON.parse(localStorage.getItem('searchMoviesList')) : [])
  const [query, setQuery] = useState(localStorage.getItem('query') ? JSON.parse(localStorage.getItem('query')) : '');
  const [isLoading, setIsLoading] = useState(false)
  const [isEmpty, setIsEmpty] = useState(true)
  let newMovieList

  useEffect(() => {
    localStorage.setItem("searchMoviesList", JSON.stringify(searchMovies));
    localStorage.setItem("query", JSON.stringify(query));
  }, [searchMovies, query]);

  useEffect(() => {
    localStorage.setItem("short", JSON.stringify(isShort));
  }, [isShort]);

  const handleIsShort = (short) => {
    setIsShort(short)
  }

  const handleIsLoad = () => {
    setIsLoading(false)
  }

  const handleIsEmpty = (newMovieList) => {
    if (newMovieList.length === 0) {
      setIsEmpty(false)
    } else {
      setIsEmpty(true)
    }
  }

  const handleSearch = ({ searchQuery }) => {
    setIsLoading(true)

    MoviesApi.getMovies()
      .then((movies) => {
        setMovies(movies);
        newMovieList = movies.filter((movie) => {
          if (isShort === false) {
            return movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase())
          } else {
            return movie.duration <= 40 && movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase())
          }
        })

        handleIsEmpty(newMovieList)
        setSearchMovies(newMovieList)
        setQuery(searchQuery)
      })
      .catch((err) => {
        setErrMessage(ERR_GETMOVIE)
      })

    setTimeout(handleIsLoad, 2000)
  }

  useEffect(() => {
    setErrMessage('')
  }, [movies])

  const handleSearchShort = () => {
    setIsLoading(true)
    if (!isShort) {
      newMovieList = searchMovies.filter(movie => movie.duration <= 40);
      setSearchMovies(newMovieList)
      handleIsEmpty(newMovieList)
    } else {
      newMovieList = movies.filter(movie => movie.nameRU.toLowerCase().includes(query.toLowerCase()));
      setSearchMovies(newMovieList)
      handleIsEmpty(newMovieList)
    }
    setTimeout(handleIsLoad, 2000)
  }

  /* Поиск на странице сохраненных фильмов */

  const [userMoviesVisible, setUserMoviesVisible] = useState(userMovies)

  useEffect(() => {
    setUserMoviesVisible(userMovies)
  }, [userMovies])

  const [isShortInSavedMovies, setIsShortInSavedMovies] = useState(false);

  const handleIsShortInSavedMovies = (short) => {
    setIsShortInSavedMovies(short)
  }

  const handleSearchInSavedMovie = ({ searchQuery }) => {
    setIsLoading(true)
    if (searchQuery === undefined) {
      setUserMoviesVisible(userMovies)
    } else {
      newMovieList = userMovies.filter((movie) => {
        if (isShortInSavedMovies === false) {
          return movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase())
        } else {
          return movie.duration <= 40 && movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase())
        }
      })

      handleIsEmpty(newMovieList)
      setUserMoviesVisible(newMovieList)
      setTimeout(handleIsLoad, 2000)
    }
  }

  const handleSearchShortInSavedMovies = () => {
    setIsLoading(true)
    if (!isShortInSavedMovies) {
      newMovieList = userMovies.filter(movie => movie.duration <= 40);
      setUserMoviesVisible(newMovieList)
      handleIsEmpty(newMovieList)
    } else {
      setUserMoviesVisible(userMovies)
      setIsEmpty(true)
    }
    setTimeout(handleIsLoad, 2000)
  }

  /* Лайк и сохранение фильма */

  const handleLikeMovie = (movie) => {

    MainApi.addMovie(
      movie.country,
      movie.director,
      movie.duration,
      movie.year,
      movie.description,
      `${MOVIE_URL}${movie.image.url}`,
      movie.trailerLink,
      `${MOVIE_URL}${movie.image.formats.thumbnail.url}`,
      movie.id,
      movie.nameRU,
      movie.nameEN)
      .then((newMovie) => {
        setUserMovies([newMovie.data, ...userMovies])
      })
      .catch((err) => {
        console.log(ERR);
      })
  }

  /* Удаление фильма */

  const handleDeleteMovie = (movieID) => {
    MainApi.deleteMovie(movieID)
      .then((res) => {
        setUserMovies((userMovies) => userMovies.filter(item => item._id !== res.data._id));
      })
      .catch((err) => {
        console.log(ERR);
      })
  }

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>

          <Route path="/" element={<Layout isLoggedIn={isLoggedIn} />}>

            <Route index element={<Main />} />

            <Route path="movies" element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Movies
                  movies={searchMovies}
                  query={query}
                  onSearch={handleSearch}
                  handleIsShort={handleIsShort}
                  short={isShort}
                  isLoading={isLoading}
                  err={errMessage}
                  handleLikeMovie={handleLikeMovie}
                  userMovies={userMovies}
                  deleteMovie={handleDeleteMovie}
                  isEmpty={isEmpty}
                  handleSearchShort={() => { handleSearchShort() }}
                  isSavedMoviesPage={isSavedMoviesPage}
                />
              </ProtectedRoute>} />

            <Route path="/saved-movies" element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <SavedMovies
                  movies={searchMovies}
                  short={isShortInSavedMovies}
                  onSearch={handleSearchInSavedMovie}
                  handleIsShort={handleIsShortInSavedMovies}
                  handleSearchShort={() => { handleSearchShortInSavedMovies() }}
                  isEmpty={isEmpty}
                  userMovies={userMoviesVisible}
                  deleteMovie={handleDeleteMovie}
                  isSavedMoviesPage={isSavedMoviesPage}
                  isLoading={isLoading}
                />
              </ProtectedRoute>} />

          </Route>

          <Route path="/profile" element={
            <>
              <Header isLoggedIn={isLoggedIn} />
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Profile onLogOut={(e) => { handleLogOut(e) }} onUpdateUser={handleUpdateUser} err={errMessage} okMessage={okMessage} />
              </ProtectedRoute>
            </>
          } />

          <Route path="/signup" element={<Register isLoggedIn={isLoggedIn} onRegister={handleRegisterUser} err={errMessage} />} />
          <Route path="/signin" element={<Login isLoggedIn={isLoggedIn} onLogIn={handleLogIn} err={errMessage} />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
      </CurrentUserContext.Provider>
    </>
  );

};

export default App;

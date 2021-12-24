import { Route, Routes } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Layout } from '../Layout/Layout';
import { Main } from '../Main/Main';
import { Login } from '../Login/Login';
import { Register } from '../Register/Register';
import { NotFound } from '../NotFound/NotFound';
import { Profile } from '../Profile/Profile';
import { Movies } from '../Movies/Movies';
import { SavedMovies } from '../SavedMovies/SavedMovies';
import './App.css';

function App() {

  const isLoggedIn = true;

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout isLoggedIn={isLoggedIn} />}>
          <Route index element={<Main />} />
          <Route path="movies" element={<Movies />} />
          <Route path="/saved-movies" element={<SavedMovies />} />
        </Route>


        <Route path="/profile" element={
          <>
            <Header isLoggedIn={isLoggedIn} />
            <Profile />
          </>
        } />

        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </>
  );

};

export default App;

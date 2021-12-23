import './MoviesCard.css'
import film from '../../images/film.jpg';
import { useState } from 'react';

export function MoviesCard() {

  const [isLiked, setIsLiked] = useState(false)

  const hendleLiked = () => {
    setIsLiked(!isLiked);
  }

  return (
    <>

<li className="card">
      <img className="card__image" alt="превью фильма" src={`${film}`} />
      <div className="card__info">
        <h2 className="card__title">Книготорговцы</h2>
        <button className={`hover-button card__like ${isLiked ? `card-like-active` : ``}`} onClick={hendleLiked} type="button" aria-label="Нравится" />
        <p className="card__time">1ч 37м</p>
      </div>
    </li>

    <li className="card">
      <img className="card__image" alt="превью фильма" src={`${film}`} />
      <div className="card__info">
        <h2 className="card__title">Книготорговцы</h2>
        <button className={`hover-button card__like ${isLiked ? `card-like-active` : ``}`} onClick={hendleLiked} type="button" aria-label="Нравится" />
        <p className="card__time">1ч 37м</p>
      </div>
    </li>

    <li className="card">
      <img className="card__image" alt="превью фильма" src={`${film}`} />
      <div className="card__info">
        <h2 className="card__title">Книготорговцы</h2>
        <button className={`hover-button card__like ${isLiked ? `card-like-active` : ``}`} onClick={hendleLiked} type="button" aria-label="Нравится" />
        <p className="card__time">1ч 37м</p>
      </div>
    </li>

    <li className="card">
      <img className="card__image" alt="превью фильма" src={`${film}`} />
      <div className="card__info">
        <h2 className="card__title">Книготорговцы</h2>
        <button className={`hover-button card__like ${isLiked ? `card-like-active` : ``}`} onClick={hendleLiked} type="button" aria-label="Нравится" />
        <p className="card__time">1ч 37м</p>
      </div>
    </li>

    <li className="card">
      <img className="card__image" alt="превью фильма" src={`${film}`} />
      <div className="card__info">
        <h2 className="card__title">Книготорговцы</h2>
        <button className={`hover-button card__like ${isLiked ? `card-like-active` : ``}`} onClick={hendleLiked} type="button" aria-label="Нравится" />
        <p className="card__time">1ч 37м</p>
      </div>
    </li>

    <li className="card">
      <img className="card__image" alt="превью фильма" src={`${film}`} />
      <div className="card__info">
        <h2 className="card__title">Книготорговцы</h2>
        <button className={`hover-button card__like ${isLiked ? `card-like-active` : ``}`} onClick={hendleLiked} type="button" aria-label="Нравится" />
        <p className="card__time">1ч 37м</p>
      </div>
    </li>

    <li className="card">
      <img className="card__image" alt="превью фильма" src={`${film}`} />
      <div className="card__info">
        <h2 className="card__title">Книготорговцы</h2>
        <button className={`hover-button card__like ${isLiked ? `card-like-active` : ``}`} onClick={hendleLiked} type="button" aria-label="Нравится" />
        <p className="card__time">1ч 37м</p>
      </div>
    </li>

    <li className="card">
      <img className="card__image" alt="превью фильма" src={`${film}`} />
      <div className="card__info">
        <h2 className="card__title">Книготорговцы</h2>
        <button className={`hover-button card__like ${isLiked ? `card-like-active` : ``}`} onClick={hendleLiked} type="button" aria-label="Нравится" />
        <p className="card__time">1ч 37м</p>
      </div>
    </li>

    <li className="card">
      <img className="card__image" alt="превью фильма" src={`${film}`} />
      <div className="card__info">
        <h2 className="card__title">Книготорговцы</h2>
        <button className={`hover-button card__like ${isLiked ? `card-like-active` : ``}`} onClick={hendleLiked} type="button" aria-label="Нравится" />
        <p className="card__time">1ч 37м</p>
      </div>
    </li>

    <li className="card">
      <img className="card__image" alt="превью фильма" src={`${film}`} />
      <div className="card__info">
        <h2 className="card__title">Книготорговцы</h2>
        <button className={`hover-button card__like ${isLiked ? `card-like-active` : ``}`} onClick={hendleLiked} type="button" aria-label="Нравится" />
        <p className="card__time">1ч 37м</p>
      </div>
    </li>

    <li className="card">
      <img className="card__image" alt="превью фильма" src={`${film}`} />
      <div className="card__info">
        <h2 className="card__title">Книготорговцы</h2>
        <button className={`hover-button card__like ${isLiked ? `card-like-active` : ``}`} onClick={hendleLiked} type="button" aria-label="Нравится" />
        <p className="card__time">1ч 37м</p>
      </div>
    </li>

    <li className="card">
      <img className="card__image" alt="превью фильма" src={`${film}`} />
      <div className="card__info">
        <h2 className="card__title">Книготорговцы</h2>
        <button className={`hover-button card__like ${isLiked ? `card-like-active` : ``}`} onClick={hendleLiked} type="button" aria-label="Нравится" />
        <p className="card__time">1ч 37м</p>
      </div>
    </li>

    </>
  );

}
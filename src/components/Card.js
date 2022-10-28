<<<<<<< HEAD
import React, {useContext} from 'react';
import "./Main.js";
import {CurrentUserContext} from '../contexts/CurrentUserContext.js';


function Card({cardInfo, onCardClick, onLikeClick, onDeleteClick}) {

  const currentUser = useContext(CurrentUserContext);
  function handleCardClick ()  {
    onCardClick(cardInfo);
  }

  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = cardInfo.owner._id === currentUser._id;

  // Создаём переменную, которую после зададим в `className` для кнопки удаления
  const cardDeleteButtonClassName = (
    `button ${isOwn ? 'button_type_delete button_do_element-delete' : ''}`
  ); 

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  function isLiked() {
    return cardInfo.likes.some(i => i._id === currentUser._id)
  }

  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = (
   `button ${isLiked() ? 'buttont_type_like buttont_type_like-active' : 'buttont_type_like'}`
  ); 

  function handleLikeClick() {
		onLikeClick(cardInfo, isLiked());
	}

  function handleCardDelete() {
		onDeleteClick(cardInfo);
	}
  
  return(
    <li className="element">
      <img className="element__image" src={cardInfo.link} alt={cardInfo.name} onClick={handleCardClick}/>
      <button className={cardDeleteButtonClassName} type="button" aria-label="Удалить" onClick={handleCardDelete}></button>
      <div className="element__group">
        <h2 className="element__signature text-overflow">{cardInfo.name}</h2>
        <div className="element__like-container">
          <button className={cardLikeButtonClassName} type="button" aria-label="Лайк" onClick={handleLikeClick}></button>
          <p className="element__counter">{cardInfo.likes.length}</p>
        </div>
      </div> 
    </li>
  )
}
=======
import React, {useContext} from 'react';
import "./Main.js";
import {CurrentUserContext} from '../contexts/CurrentUserContext.js';


function Card({cardInfo, onCardClick, onLikeClick, onDeleteClick}) {

  const currentUser = useContext(CurrentUserContext);
  function handleCardClick ()  {
    onCardClick(cardInfo);
  }

  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = cardInfo.owner._id === currentUser._id;

  // Создаём переменную, которую после зададим в `className` для кнопки удаления
  const cardDeleteButtonClassName = (
    `button ${isOwn ? 'button_type_delete button_do_element-delete' : ''}`
  ); 

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  function isLiked() {
    return cardInfo.likes.some(i => i._id === currentUser._id)
  }

  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = (
   `button ${isLiked() ? 'buttont_type_like buttont_type_like-active' : 'buttont_type_like'}`
  ); 

  function handleLikeClick() {
		onLikeClick(cardInfo, isLiked());
	}

  function handleCardDelete() {
		onDeleteClick(cardInfo);
	}
  
  return(
    <li className="element">
      <img className="element__image" src={cardInfo.link} alt={cardInfo.name} onClick={handleCardClick}/>
      <button className={cardDeleteButtonClassName} type="button" aria-label="Удалить" onClick={handleCardDelete}></button>
      <div className="element__group">
        <h2 className="element__signature text-overflow">{cardInfo.name}</h2>
        <div className="element__like-container">
          <button className={cardLikeButtonClassName} type="button" aria-label="Лайк" onClick={handleLikeClick}></button>
          <p className="element__counter">{cardInfo.likes.length}</p>
        </div>
      </div> 
    </li>
  )
}
>>>>>>> c7baf28ad85f6f5949ab4e0648b2a5ad4030a529
export default Card
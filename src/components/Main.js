import React, {useContext} from 'react';
import Card from "./Card.js";
import {CurrentUserContext} from '../contexts/CurrentUserContext.js';


function Main ({onEditProfile, onEditCard, onEditAvatar, onCardClick, cards, handleLikeClick, handleCardDelete}) { 

  const currentUser = useContext(CurrentUserContext);
  
  return(
    <> 
    <main className="content">
     <section className="profile">
       <div className="profile__card">
          <div className="profile__image" onClick={onEditAvatar} style={{ backgroundImage: `url(${currentUser.avatar})`}}></div>
          <div className="profile__info">
            <h1 className="profile__title text-overflow">{currentUser.name}</h1>
            <button className="button button_type_edit button_do_profile-edit" type="button" aria-label="Изменить профиль" onClick={onEditProfile}></button>
            <p className="profile__subtitle text-overflow">{currentUser.about}</p>
          </div>
        </div>
          <button className="button button_type_add button_do_profile-add" type="button" aria-label="Добавить карточку" onClick={onEditCard}></button>
      </section>
      <ul className="elements">
        {cards.map (card => (
            <Card cardInfo={card} onCardClick={onCardClick} onLikeClick={handleLikeClick} onDeleteClick={handleCardDelete} key={card._id}/>
        ))}
      </ul>
    </main>
  </>
  )
} 
export default Main
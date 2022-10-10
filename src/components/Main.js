import React, {useEffect, useState} from 'react';
import Api from "../utils/Api.js";
import Card from "./Card.js";


function Main ({onEditProfile, onEditCard, onEditAvatar, onCardClick}) { 
  const [userAvatar, setUserAvatar] = useState('');
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Api.getInitialInfo().then(([user, initialCards]) => {
      setUserAvatar(user.avatar);
      setUserName(user.name);
      setUserDescription (user.about);
      setCards(initialCards);
    }).catch(err => {
      Api.enterError(err);
    });
  
  }, []);
  
  return(
    <> 
    <main className="content">
     <section className="profile">
       <div className="profile__card">
          <div className="profile__image" onClick={onEditAvatar} style={{ backgroundImage: `url(${userAvatar})`}}></div>
          <div className="profile__info">
            <h1 className="profile__title text-overflow">{userName}</h1>
            <button className="button button_type_edit button_do_profile-edit" type="button" aria-label="Изменить профиль" onClick={onEditProfile}></button>
            <p className="profile__subtitle text-overflow">{userDescription}</p>
          </div>
        </div>
          <button className="button button_type_add button_do_profile-add" type="button" aria-label="Добавить карточку" onClick={onEditCard}></button>
      </section>
      <ul className="elements">
        {cards.map (card => (
            <Card id={card._id} cardInfo={card} onCardClick={onCardClick}/>
        ))}
      </ul>
    </main>
  </>
  )
} 
export default Main
import '../App.css';
import Header from "./Header.js";
import Footer from "./Footer.js";
import EditProfilePopup from "./popup/EditProfilePopup.js";
import EditCardPopup from "./popup/EditCardPopup.js";
import EditAvatarPopup from "./popup/EditAvatarPopup.js";
import ImagePopup from "./popup/ImagePopup.js";
import Main from "./Main.js";
import Api from "../utils/Api.js";
import React, {useEffect, useState} from 'react';
import {CurrentUserContext} from '../contexts/CurrentUserContext.js';
import FormValues from "./FormValues.js";


function App() {
  const [stateEditProfile, swapStateEditProfile] = React.useState(false);
  const [stateEditCard, swapStateEditCard] = React.useState(false);
  const [stateEditAvatar, swapStateEditAvatar] = React.useState(false);
  const [stateCardImage, swapstateCardImage] = React.useState(null);
  
  const [currentUser, setCurrentUser] = React.useState({});
  
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Api.getInitialInfo().then(([user, initialCards]) => {
      setCurrentUser(user);
      setCards(initialCards);
    }).catch(err => {
      Api.enterError(err);
    });
  }, []);

  function handleCardLike(card, isLiked) {
     if (!isLiked) {
      Api.putLike(card._id).then((newCard) => {
          setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
     }).catch(err => {
      Api.enterError(err);
    });
    } else {
      Api.removeLike(card._id).then((newCard) => {
       setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    }).catch(err => {
      Api.enterError(err);
    });
    }
  } 

  function handleCardDelete(card) {
    Api.deleteCard(card._id).then((res) => {
       setCards((state) => state.filter((item) => item._id !== card._id));
    }).catch(err => {
      Api.enterError(err);
    });
  } 

  function handleUserInfo({name, about}){
    Api.changeProfileInfo(name, about).then((res) => {
      setCurrentUser(res);
			closeAllPopups();
   }).catch(err => {
     Api.enterError(err);
   });
  }

  function handleAvatarInfo(avatar){
    Api.handleAvatar(avatar).then((res) => {
      setCurrentUser(res);
			closeAllPopups();
   }).catch(err => {
     Api.enterError(err);
   });
  }

  function handleAddCard({title, urlImg}){
    Api.addCard(title, urlImg).then((res) => {
      setCards([res, ...cards]); ;
			closeAllPopups();
   }).catch(err => {
     Api.enterError(err);
   });
  }

  function handleEditProfile () {
    swapStateEditProfile(true);
  }
  function handleEditCard () {
    swapStateEditCard(true);
  }
  function handleEditAvatar () {
    swapStateEditAvatar(true);
  }
  function handleCardImage (cardInfo) {
    swapstateCardImage(cardInfo);
  }

  function closeAllPopups () {
    swapStateEditProfile(false);
    swapStateEditCard(false);
    swapStateEditAvatar(false);
    swapstateCardImage(null);
    setValues({})
  }
  const {values, handleChange, setValues} = FormValues({});



  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="body">
        <div className="page">
          <Header />
          <Main 
              onEditProfile={handleEditProfile}
              onEditCard={handleEditCard}
              onEditAvatar={handleEditAvatar}
              onCardClick={handleCardImage}
              onClosePopup={closeAllPopups}
              cards={cards}
              handleLikeClick={handleCardLike}
              handleCardDelete={handleCardDelete}
            />
          <Footer />
        </div>
      </div>
      <ImagePopup cardInfo={stateCardImage} onClose={closeAllPopups}></ImagePopup>
      <EditProfilePopup  inputValues={values} setInputValues={setValues} handleInputValues={handleChange} onSubmit={handleUserInfo} namePopup={"profile"} titlePopup={"Редактировать профиль"} textSubmit={"Сохранить"} isOpen={stateEditProfile} onClose={closeAllPopups}></EditProfilePopup>
      <EditCardPopup inputValues={values} setInputValues={setValues} handleInputValues={handleChange} onSubmit={handleAddCard} namePopup={"card"} titlePopup={"Новое место"} textSubmit={"Создать"} isOpen={stateEditCard} onClose={closeAllPopups}></EditCardPopup>
      <EditAvatarPopup  handleInputValues={handleChange} onSubmit={handleAvatarInfo} namePopup={"avatar"} titlePopup={"Обновить аватар"} textSubmit={"Сохранить"} isOpen={stateEditAvatar} onClose={closeAllPopups}></EditAvatarPopup>
    </CurrentUserContext.Provider>
  );
};

export default App;

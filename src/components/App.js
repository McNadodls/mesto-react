import '../App.css';
import Header from "./Header.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js"
import Main from "./Main.js"
import React from 'react';


function App() {
  const [stateEditProfile, swapStateEditProfile] = React.useState(false);
  const [stateEditCard, swapStateEditCard] = React.useState(false);
  const [stateEditAvatar, swapStateEditAvatar] = React.useState(false);
  const [stateCardImage, swapstateCardImage] = React.useState(null);

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
  }
  return (
    <>
      <div className="body">
        <div className="page">
          <Header />
          <Main 
              onEditProfile={handleEditProfile}
              onEditCard={handleEditCard}
              onEditAvatar={handleEditAvatar}
              onCardClick={handleCardImage}
              onClosePopup={closeAllPopups}
            />
          <Footer />
        </div>
      </div>
      <ImagePopup cardInfo={stateCardImage} onClose={closeAllPopups}></ImagePopup>
      <PopupWithForm name={"profile"} title={"Редактировать профиль"} textSubmit={"Сохранить"} isOpen={stateEditProfile} onClose={closeAllPopups}>
        <input className="popup__input popup__input_type_name" id="name-input" type="text" required  placeholder="Ваше имя" name="popup__input_type_name" minlength="2" maxlength="40" />
        <span className="popup__input-error name-input-error"></span>
        <input className="popup__input popup__input_type_profession" id="profession-input" type="text" required  placeholder="Какова ваша профессия" name="popup__input_type_profession" minlength="2" maxlength="200" />
        <span className="popup__input-error profession-input-error"></span>
      </PopupWithForm>
      <PopupWithForm name={"card"} title={"Новое место"} textSubmit={"Создать"} isOpen={stateEditCard} onClose={closeAllPopups}>
        <input className="popup__input popup__input_type_title" id="title-input" type="text" required  placeholder="Название" name="popup__input_type_title" minlength="2" maxlength="30" />
        <span className="popup__input-error title-input-error"></span>
        <input className="popup__input popup__input_type_url-img" id="url-img-input" type="url" required  placeholder="Ссылка на картинку" name="popup__input_type_url-img" />
        <span className="popup__input-error url-img-input-error"></span>
      </PopupWithForm>
      <PopupWithForm name={"avatar"} title={"Обновить аватар"} textSubmit={"Сохранить"} isOpen={stateEditAvatar} onClose={closeAllPopups}>
        <input className="popup__input popup__input_type_url-avatar" id="url-avatar-input" type="url" required  placeholder="Ссылка на картинку" name="popup__input_type_url-avatar" />
        <span className="popup__input-error url-avatar-input-error"></span>
      </PopupWithForm>
    </>
  );
}

export default App;

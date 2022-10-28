<<<<<<< HEAD
import PopupWithForm from "./PopupWithForm.js";
import React, {useContext} from 'react';
import {CurrentUserContext} from '../../contexts/CurrentUserContext.js';


function EditProfilePopup ({inputValues, setInputValues, handleInputValues, onSubmit, namePopup, titlePopup, textSubmit, isOpen, onClose}){
  const currentUser = useContext(CurrentUserContext);

  const {"popup__input_type_name":name, "popup__input_type_profession":about} = inputValues;

  React.useEffect(() => {
    if(isOpen) {
      setInputValues({
        "popup__input_type_name":currentUser.name,
         "popup__input_type_profession":currentUser.about,
      })
    }
  }, [currentUser, isOpen]); 

  function handleSubmit(e){
    e.preventDefault();
    onSubmit({
      name,
      about,
    });
  }
  
  return (
    <PopupWithForm name={namePopup} title={titlePopup} textSubmit={textSubmit} isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} >
        <input onChange={handleInputValues} defaultValue={name} className="popup__input popup__input_type_name" id="name-input" type="text" required  placeholder="Ваше имя" name="popup__input_type_name" minLength="2" maxLength="40" />
        <span className="popup__input-error name-input-error"></span>
        <input onChange={handleInputValues} defaultValue={about} className="popup__input popup__input_type_profession" id="profession-input" type="text" required  placeholder="Какова ваша профессия" name="popup__input_type_profession" minLength="2" maxLength="200" />
        <span className="popup__input-error profession-input-error"></span>
      </PopupWithForm>
  )
}
=======
import PopupWithForm from "./PopupWithForm.js";
import React, {useContext} from 'react';
import {CurrentUserContext} from '../../contexts/CurrentUserContext.js';


function EditProfilePopup ({inputValues, setInputValues, handleInputValues, onSubmit, namePopup, titlePopup, textSubmit, isOpen, onClose}){
  const currentUser = useContext(CurrentUserContext);

  const {"popup__input_type_name":name, "popup__input_type_profession":about} = inputValues;

  React.useEffect(() => {
    if(isOpen) {
      setInputValues({
        "popup__input_type_name":currentUser.name,
         "popup__input_type_profession":currentUser.about,
      })
    }
  }, [currentUser, isOpen]); 

  function handleSubmit(e){
    e.preventDefault();
    onSubmit({
      name,
      about,
    });
  }
  
  return (
    <PopupWithForm name={namePopup} title={titlePopup} textSubmit={textSubmit} isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} >
        <input onChange={handleInputValues} defaultValue={name} className="popup__input popup__input_type_name" id="name-input" type="text" required  placeholder="Ваше имя" name="popup__input_type_name" minLength="2" maxLength="40" />
        <span className="popup__input-error name-input-error"></span>
        <input onChange={handleInputValues} defaultValue={about} className="popup__input popup__input_type_profession" id="profession-input" type="text" required  placeholder="Какова ваша профессия" name="popup__input_type_profession" minLength="2" maxLength="200" />
        <span className="popup__input-error profession-input-error"></span>
      </PopupWithForm>
  )
}
>>>>>>> c7baf28ad85f6f5949ab4e0648b2a5ad4030a529
export default EditProfilePopup;
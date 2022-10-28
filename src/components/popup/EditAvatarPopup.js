<<<<<<< HEAD
import PopupWithForm from "./PopupWithForm.js";
import React, {useEffect, useRef} from 'react';


function EditAvatarPopup ({handleInputValues, onSubmit, namePopup, titlePopup, textSubmit, isOpen, onClose}){

  const avatarRef = useRef('');

  function handleSubmit(e){
    e.preventDefault();
    onSubmit(avatarRef.current.value);
  }

  useEffect(() => {
		avatarRef.current.value = '';
	}, [isOpen])

  return (
    <PopupWithForm name={namePopup} title={titlePopup} textSubmit={textSubmit} isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
        <input onChange={handleInputValues} className="popup__input popup__input_type_url-avatar" id="url-avatar-input" type="url" required  placeholder="Ссылка на картинку" name="popup__input_type_url-avatar" ref={avatarRef}/>
        <span className="popup__input-error url-avatar-input-error"></span>
      </PopupWithForm>
  )
}
=======
import PopupWithForm from "./PopupWithForm.js";
import React, {useEffect, useRef} from 'react';


function EditAvatarPopup ({handleInputValues, onSubmit, namePopup, titlePopup, textSubmit, isOpen, onClose}){

  const avatarRef = useRef('');

  function handleSubmit(e){
    e.preventDefault();
    onSubmit(avatarRef.current.value);
  }

  useEffect(() => {
		avatarRef.current.value = '';
	}, [isOpen])

  return (
    <PopupWithForm name={namePopup} title={titlePopup} textSubmit={textSubmit} isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
        <input onChange={handleInputValues} className="popup__input popup__input_type_url-avatar" id="url-avatar-input" type="url" required  placeholder="Ссылка на картинку" name="popup__input_type_url-avatar" ref={avatarRef}/>
        <span className="popup__input-error url-avatar-input-error"></span>
      </PopupWithForm>
  )
}
>>>>>>> c7baf28ad85f6f5949ab4e0648b2a5ad4030a529
export default EditAvatarPopup;
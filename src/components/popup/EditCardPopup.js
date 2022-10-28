<<<<<<< HEAD
import PopupWithForm from "./PopupWithForm.js";
import React from 'react';

function EditCardPopup ({inputValues, setInputValues, handleInputValues, onSubmit, namePopup, titlePopup, textSubmit, isOpen, onClose}){
  
  const {"popup__input_type_title":title, "popup__input_type_url-img":urlImg} = inputValues;

  React.useEffect(() => {
    if (isOpen) {
    setInputValues({
      "popup__input_type_title":'',
      "popup__input_type_url-img":'',
    })
  }
  }, [isOpen]); 

  function handleSubmit(e){
    e.preventDefault();
    onSubmit({
      title,
      urlImg,
    });
  }

  return (
    <PopupWithForm name={namePopup} title={titlePopup} textSubmit={textSubmit} isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
        <input onChange={handleInputValues} value={title} className="popup__input popup__input_type_title" id="title-input" type="text" required  placeholder="Название" name="popup__input_type_title" minLength="2" maxLength="30" />
        <span className="popup__input-error title-input-error"></span>
        <input onChange={handleInputValues} value={urlImg} className="popup__input popup__input_type_url-img" id="url-img-input" type="url" required  placeholder="Ссылка на картинку" name="popup__input_type_url-img" />
        <span className="popup__input-error url-img-input-error"></span>
      </PopupWithForm>
  )
}
=======
import PopupWithForm from "./PopupWithForm.js";
import React from 'react';

function EditCardPopup ({inputValues, setInputValues, handleInputValues, onSubmit, namePopup, titlePopup, textSubmit, isOpen, onClose}){
  
  const {"popup__input_type_title":title, "popup__input_type_url-img":urlImg} = inputValues;

  React.useEffect(() => {
    if (isOpen) {
    setInputValues({
      "popup__input_type_title":'',
      "popup__input_type_url-img":'',
    })
  }
  }, [isOpen]); 

  function handleSubmit(e){
    e.preventDefault();
    onSubmit({
      title,
      urlImg,
    });
  }

  return (
    <PopupWithForm name={namePopup} title={titlePopup} textSubmit={textSubmit} isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
        <input onChange={handleInputValues} value={title} className="popup__input popup__input_type_title" id="title-input" type="text" required  placeholder="Название" name="popup__input_type_title" minLength="2" maxLength="30" />
        <span className="popup__input-error title-input-error"></span>
        <input onChange={handleInputValues} value={urlImg} className="popup__input popup__input_type_url-img" id="url-img-input" type="url" required  placeholder="Ссылка на картинку" name="popup__input_type_url-img" />
        <span className="popup__input-error url-img-input-error"></span>
      </PopupWithForm>
  )
}
>>>>>>> c7baf28ad85f6f5949ab4e0648b2a5ad4030a529
export default EditCardPopup;
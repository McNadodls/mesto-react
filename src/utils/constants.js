const btnEditProfile = document.querySelector(".button_do_profile-edit");//кнопка ручка
const btnAddElement = document.querySelector(".button_do_profile-add");//кнопка +
const avatar = document.querySelector(".profile__image");

const configForm = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".button_type_send",
  inactiveButtonClass: "buttont_type_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_active",
}

export {btnEditProfile, btnAddElement, avatar, configForm};
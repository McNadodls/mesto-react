import PopupWithForm from "./popup/PopupWithForm.js";
import React, {useEffect, useState, useContext} from 'react';
import EditProfilePopup from "./popup/EditProfilePopup.js";

export default function FormValues(inputValues) {
  const [values, setValues] = useState(inputValues);

  const handleChange = (event) => {
    const {value, name} = event.target;
    setValues({...values, [name]: value});
    console.log(values);
  };
  return {values, handleChange, setValues};
}
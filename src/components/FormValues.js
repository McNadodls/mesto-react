import React, { useState } from 'react';


export default function FormValues(inputValues) {
  const [values, setValues] = useState(inputValues);

  const handleChange = (event) => {
    const {value, name} = event.target;
    setValues({...values, [name]: value});
    console.log(values);
  };
  return {values, handleChange, setValues};
}
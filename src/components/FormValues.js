<<<<<<< HEAD
import React, { useState } from 'react';


export default function FormValues(inputValues) {
  const [values, setValues] = useState(inputValues);

  const handleChange = (event) => {
    const {value, name} = event.target;
    setValues({...values, [name]: value});
    console.log(values);
  };
  return {values, handleChange, setValues};
=======
import React, { useState } from 'react';


export default function FormValues(inputValues) {
  const [values, setValues] = useState(inputValues);

  const handleChange = (event) => {
    const {value, name} = event.target;
    setValues({...values, [name]: value});
    console.log(values);
  };
  return {values, handleChange, setValues};
>>>>>>> c7baf28ad85f6f5949ab4e0648b2a5ad4030a529
}
import React, {useEffect, useState} from 'react';
import {Route} from 'react-router-dom';
import AuthForm from './AuthForm';

function Register  (props) {
  return (
      <AuthForm {...props} title="Регистрация" submitTitle="Зарегистрироваться" regSignature="Уже зарегистрированы? Войти"/>
  )
}

export default Register ;
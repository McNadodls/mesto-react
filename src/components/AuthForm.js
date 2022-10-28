import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import InfoTooltip from './popup/InfoTooltip.js'

function AuthForm (props) {
  const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

  function handleSubmit (e) {
    e.preventDefault();
    props.onSubmit(email, password);
  }
  return (
    <form className="authForm" onSubmit={handleSubmit}>
      <h2 className="authForm__title">{props.title}</h2>
      <input onChange={(e) => setEmail(e.target.value)} value={email} className="authForm__input" id="aith-emale-input" type="text" required  placeholder="Email" name="authForm__input_type_email" minLength="2" maxLength="30" />
      <input onChange={(e) => setPassword(e.target.value)} value={password} className="authForm__input" id="aith-password-input" type="password" required  placeholder="Пароль" name="authForm__input_type_password" minLength="2" maxLength="30" />
      <button type="submit" className="button button_type_auth-submit">{props.submitTitle}</button>
      {props.regSignature ? <Link to="/sign-in" className="authForm__reg-signature">{props.regSignature}</Link> : <></>}
      <InfoTooltip />
    </form> 
  )
}

export default AuthForm;
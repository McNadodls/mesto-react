import logo from '../images/logo/Vector.svg';
import React, {useEffect, useState} from 'react';
import {Route, Redirect} from 'react-router-dom';
import { useParams, useHistory, NavLink } from 'react-router-dom'; 

function Header (props) {
  const history = useHistory(); 
  console.log(history.location)

  
  return(
  <header className="header">
    <img className="header__logo" src={logo} alt="Место Россия" />
    <nav className="header__links">
      <Route path="/sign-in"><NavLink  to="/sign-up" className="header__link">Регистрация</NavLink></Route>
      <Route path="/sign-up"><NavLink  to="/sign-in" className="header__link">Войти</NavLink></Route>
      <Route path="/main">
        <p className="header__email">{}</p> 
        <NavLink  to="/sign-in" className="header__link">Выйти</NavLink>
      </Route>
    </nav>

  
  </header>
)
}
export default Header
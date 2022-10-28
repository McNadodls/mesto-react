<<<<<<< HEAD
import logo from '../images/logo/Vector.svg';
import React from 'react';
import {NavLink, Route} from 'react-router-dom'; 

function Header (props) {
  return(
  <header className="header">
    <img className="header__logo" src={logo} alt="Место Россия" />
    <nav className="header__links">
      <Route path="/sign-in"><NavLink  to="/sign-up" className="header__link">Регистрация</NavLink></Route>
      <Route path="/sign-up"><NavLink  to="/sign-in" className="header__link">Войти</NavLink></Route>
      <Route path="/main">
        <p className="header__email">{props.loggedEmale}</p> 
        <NavLink  to="/sign-in" onClick={props.onClose} className="header__link">Выйти</NavLink>
      </Route>
    </nav>

  
  </header>
)
}
=======
import logo from '../images/logo/Vector.svg';
import React from 'react';
import {NavLink, Route} from 'react-router-dom'; 

function Header (props) {
  return(
  <header className="header">
    <img className="header__logo" src={logo} alt="Место Россия" />
    <nav className="header__links">
      <Route path="/sign-in"><NavLink  to="/sign-up" className="header__link">Регистрация</NavLink></Route>
      <Route path="/sign-up"><NavLink  to="/sign-in" className="header__link">Войти</NavLink></Route>
      <Route path="/main">
        <p className="header__email">{props.loggedEmale}</p> 
        <NavLink  to="/sign-in" onClick={props.onClose} className="header__link">Выйти</NavLink>
      </Route>
    </nav>

  
  </header>
)
}
>>>>>>> c7baf28ad85f6f5949ab4e0648b2a5ad4030a529
export default Header
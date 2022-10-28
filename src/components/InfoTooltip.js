import React, {useEffect, useState} from 'react';
import {Route} from 'react-router-dom';
import AuthForm from './AuthForm';

function InfoTooltip  (res) {
  
  return (
    <div className={`popup ${false && 'popup_opened'}`}>
      <div className="popup__container">
        <button className={`button button_type_close button_do_popup-close-tooltip`} type="button" aria-label="Закрыть"></button>
          <div className="tooltip">
            <div className="tooltip__image" />
            <h2 className="tooltip__message">Вы успешно зарегистрировались!</h2>
          </div>
      </div>
    </div>
  )
}

export default InfoTooltip ;
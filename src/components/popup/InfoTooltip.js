<<<<<<< HEAD
import NoIcon from '../../images/popup/NoIcon.svg';
import OkIcon from '../../images/popup/OkIcon.svg';

function InfoTooltip  ({status, isOpen, onClose}) {
  
  return (
    <div className={`popup ${isOpen && 'popup_opened'}`}>
      <div className="popup__container">
        <button onClick={onClose} className={`button button_type_close button_do_popup-close-tooltip`} type="button" aria-label="Закрыть"></button>
          <div className="tooltip">
            {<img src={status ? OkIcon : NoIcon} className="tooltip__image" />}
            <h2 className="tooltip__message">{status ? "Вы успешно зарегистрировались!" : "Что-то пошло не так! Попробуйте ещё раз."}</h2>
          </div>
      </div>
    </div>
  )
}

=======
import NoIcon from '../../images/popup/NoIcon.svg';
import OkIcon from '../../images/popup/OkIcon.svg';

function InfoTooltip  ({status, isOpen, onClose}) {
  
  return (
    <div className={`popup ${isOpen && 'popup_opened'}`}>
      <div className="popup__container">
        <button onClick={onClose} className={`button button_type_close button_do_popup-close-tooltip`} type="button" aria-label="Закрыть"></button>
          <div className="tooltip">
            {<img src={status ? OkIcon : NoIcon} className="tooltip__image" />}
            <h2 className="tooltip__message">{status ? "Вы успешно зарегистрировались!" : "Что-то пошло не так! Попробуйте ещё раз."}</h2>
          </div>
      </div>
    </div>
  )
}

>>>>>>> c7baf28ad85f6f5949ab4e0648b2a5ad4030a529
export default InfoTooltip ;
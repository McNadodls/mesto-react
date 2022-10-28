<<<<<<< HEAD
function ImagePopup ({cardInfo, onClose}) { 
  return( 
    <div className={`popup popup_type_img ${cardInfo && 'popup_opened'}`} >
      <div className="popup__image-container">
        <button className="button button_type_close button_do_popup-close-image" type="button" aria-label="Закрыть" onClick={onClose}></button>
        <img className="popup__image" src={cardInfo?.link} alt={cardInfo?.name} />
        <p className="popup__signature">{cardInfo?.name}</p>
      </div>
    </div>
  )
}
=======
function ImagePopup ({cardInfo, onClose}) { 
  return( 
    <div className={`popup popup_type_img ${cardInfo && 'popup_opened'}`} >
      <div className="popup__image-container">
        <button className="button button_type_close button_do_popup-close-image" type="button" aria-label="Закрыть" onClick={onClose}></button>
        <img className="popup__image" src={cardInfo?.link} alt={cardInfo?.name} />
        <p className="popup__signature">{cardInfo?.name}</p>
      </div>
    </div>
  )
}
>>>>>>> c7baf28ad85f6f5949ab4e0648b2a5ad4030a529
export default ImagePopup
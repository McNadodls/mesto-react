function PopupWithForm(props)  { 
  return( 
    <div className={`popup popup_type_${props.name} ${props.isOpen && 'popup_opened'}`}>
      <div className="popup__container">
      <button className={`button button_type_close button_do_popup-close-${props.name}`} type="button" aria-label="Закрыть" onClick={props.onClose}></button>
      <form onSubmit={props.onSubmit} className={`popup__form popup__form_type_${props.name}`} name={`popup__form_type_${props.name}`} noValidate>
        <h2 className="popup__title popup__title_size_l">{props.title}</h2>
        {props.children}
        <button className={`button button_type_send`} type="submit" aria-label="Создать">{props.textSubmit}</button>
        </form>
      </div>
    </div>
  )
}
export default PopupWithForm
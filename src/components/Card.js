import "./Main.js";

function Card({cardInfo, onCardClick}) {
  function handleCardClick ()  {
    onCardClick(cardInfo);
  }
  return(
    <li className="element">
      <img className="element__image" src={cardInfo.link} alt={cardInfo.name} onClick={handleCardClick}/>
      <button className="button button_type_delete button_do_element-delete" type="button" aria-label="Удалить" ></button>
      <div className="element__group">
        <h2 className="element__signature text-overflow">{cardInfo.name}</h2>
        <div className="element__like-container">
          <button className="button buttont_type_like" type="button" aria-label="Лайк"></button>
          <p className="element__counter">{cardInfo.likes.length}</p>
        </div>
      </div> 
    </li>
  )
}
export default Card
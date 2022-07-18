class Card {
  constructor(cardTitle, cardImage) {
    this._title = cardTitle;
    this._image = cardImage;
  }

  _getTemplate() {
    //  toma el marcado de HTML y copia el elemento
    const cardElement = document
      .querySelector("#cards")
      .content.querySelector(".card__container")
      .cloneNode(true);

    // devuelve el elemento DOM de la tarjeta
    return cardElement;
  }

  generateCard() {
    // Almacenar el marcado en el campo privado _element
    this._element = this._getTemplate();

    // Añadir datos
    this._element.querySelector(".card__img").src = this._image;
    this._element.querySelector(".card__title").textContent = this._text;

    // Devolver el elemento
    return this._element;
  }

  cardLike() {
    this.isLiked = !this.isLiked;
  }
}

export default Card;

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

  cardLike() {
    this.isLiked = !this.isLiked;
  }
}

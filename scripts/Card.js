class Card {
  constructor(cardTitle, cardImage) {
    this._title = cardTitle;
    this._image = cardImage;
    this.isLiked = false;
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
    this._setEventListeners();

    // Añadir datos
    this._element.querySelector(".card__img").src = this._image;
    this._element.querySelector(".card__img").alt = this._title;
    this._element.querySelector(".card__title").textContent = this._title;

    // Devolver el elemento
    return this._element;
  }

  _setEventListeners() {
    this._element
      .querySelector(".card__like-button")
      .addEventListener("click", () => {
        this.cardLike();
      });

    this._element
      .querySelector(".card__remove-button")
      .addEventListener("click", () => {
        this.cardRemove();
      });
  }

  cardLike() {
    this.isLiked = !this.isLiked;

    if (this.isLiked) {
      this._element
        .querySelector(".card__like-button")
        .classList.add("card__like-button_active");
    } else {
      this._element
        .querySelector(".card__like-button")
        .classList.remove("card__like-button_active");
    }
  }

  cardRemove(evt) {
    evt.target.parentElement.remove();
  }
}

export { Card };

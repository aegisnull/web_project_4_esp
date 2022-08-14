class Card {
  constructor(cardTitle, cardImage, cardTemplateSelector, popup, deleteButton) {
    this._title = cardTitle;
    this._image = cardImage;
    this._cardTemplateSelector = cardTemplateSelector;
    this.isLiked = false;
    this._popup = document.querySelector(popup);
    this._deleteButton = document.querySelector(deleteButton);
  }

  _getTemplate() {
    //  toma el marcado de HTML y copia el elemento
    // devuelve el elemento DOM de la tarjeta
    return document
      .querySelector(this._cardTemplateSelector)
      .content.querySelector(".card__container")
      .cloneNode(true);
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
        this._cardLike();
      });

    this._element
      .querySelector(".card__remove-button")
      .addEventListener("click", () => {
        this.open();
      });
  }

  _cardLike() {
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

  _cardRemove() {
    this._element.remove();
  }

  open() {
    this._popup.classList.add("modal_active");
    this._closeEventListeners();
  }

  _closeEventListeners() {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.close();
      }
    });
    this._popup.addEventListener("click", (e) => {
      if (e.target === this._popup) {
        this.close();
      }
    });
    this._popup
      .querySelector(".modal__delete-close")
      .addEventListener("click", () => {
        this.close();
      });

    this._popup
      .querySelector(".modal__form_delete")
      .addEventListener("submit", (e) => {
        e.preventDefault();
        this.close();
        this._cardRemove();
      });
  }

  close() {
    this._popup.classList.remove("modal_active");
  }
}

export { Card };

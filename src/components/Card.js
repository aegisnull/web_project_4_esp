import { Api } from "./Api.js";

// Code to add api
const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/cohort-1-es",
  headers: {
    authorization: "e7cf5ec1-f874-45f0-bd41-d890ac5955db",
    "Content-Type": "application/json",
  },
});

class Card {
  constructor(
    cardTitle,
    cardImage,
    cardLikes,
    ownerID,
    cardID,
    cardTemplateSelector,
    popup,
    deleteButton
  ) {
    this._title = cardTitle;
    this._image = cardImage;
    this._likes = cardLikes;
    this._ownerID = ownerID;
    this._cardID = cardID;
    this._cardTemplateSelector = cardTemplateSelector;
    this.isLiked = false;
    this._popup = document.querySelector(popup);
    this._deleteButton = document.querySelector(deleteButton);
    this._myID = "93e8790e5bc88c3a9323d3fb";
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
    this._element.querySelector(".card__like-counter").textContent =
      this._likes.length;

    // Devolver el elemento
    if (this._myID === this._ownerID) {
      this._element
        .querySelector(".card__remove-button")
        .classList.add("card__remove-button_active");
    }

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
      api.addLike(this._cardID);
    } else {
      this._element
        .querySelector(".card__like-button")
        .classList.remove("card__like-button_active");
      api.removeLike(this._cardID);
    }
  }

  _cardRemove() {
    api.deleteCard(this._cardID);
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

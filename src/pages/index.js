import "./index.css"; // agrega la importación del archivo principal de hojas de estilo
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";

// import images
import close from "../images/close.svg";
import edit from "../images/edit.svg";
import likefill from "../images/like-fill.svg";
import like from "../images/like.svg";
import logo from "../images/logo.svg";
import post from "../images/post.svg";
import trash from "../images/trash.svg";

// Variable initialization

// Code to use cards with the template and array
// Select where to put the template cards
const cards = document.querySelector(".cards");
// Create a small fragment to put the cards in
const fragment = document.createDocumentFragment();
// Add arrays for dynamic cards
const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];

const initialCardsRender = new Section(
  initialCards,
  initialCards.forEach((item) => {
    const card = new Card(
      item.name,
      item.link,
      "#cards",
      ".modal-confirmation",
      ".modal__delete-close",
      ".modal__form-delete"
    );
    const cardElement = card.generateCard();
    document.querySelector(".cards").append(cardElement);
  }),
  ".cards"
);

//initialCards.forEach((item) => {
//  const card = new Card(item.name, item.link, "#cards");
//  const cardElement = card.generateCard();
//  document.querySelector(".cards").append(cardElement);
//});

// Code to add new cards with the form sumbit
// Event listener for form submit
const newPostForm = document.querySelector(".modal-post");
newPostForm.addEventListener("submit", addNewCard);

// Declare functions to form fields
const newPostName = document.querySelector(".modal__profile-cardtitle");
const newPostLink = document.querySelector(".modal__profile-cardurl");

function addNewCard(evt) {
  evt.preventDefault();
  const newCard = new Card(newPostName.value, newPostLink.value, "#cards");
  const cardElement = newCard.generateCard();
  fragment.append(cardElement);
  cards.prepend(fragment);
}

const lightbox = new PopupWithImage("#lightbox");

const images = document.querySelectorAll(".card__img");
images.forEach((image) => {
  image.addEventListener("click", () => {
    lightbox.open(image);

    const lightboxCloseButton = document.querySelector(".popup__close");
    lightboxCloseButton.addEventListener("click", () => {
      lightbox.close();
    });
  });
});

// validate form
const formSelectors = {
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__form-submit",
  inactiveButtonClass: "modal__form-submit_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

const editProfileForm = document.querySelector(".modal__form_profile");
const newCardForm = document.querySelector(".modal__form_place");

const editProfileValidation = new FormValidator(formSelectors, editProfileForm);
const newCardValidation = new FormValidator(formSelectors, newCardForm);

editProfileValidation.enableValidation();
newCardValidation.enableValidation();

// User info
const userInfo = new UserInfo(".profile__name", ".profile__title");

const editProfilePopup = new PopupWithForm(".modal", ".modal__form_profile");

const editProfileButton = document.querySelector(".profile__edit-button");
editProfileButton.addEventListener("click", () => {
  editProfilePopup.open();
  editProfilePopup.setEventListeners();
  editProfilePopup._handleEscClose();
  userInfo.getUserInfo();
});

const formProfile = document.querySelector(".modal__form_profile");
formProfile.addEventListener("submit", () => {
  userInfo.setUserInfo();
});

const newCardPopup = new PopupWithForm(".modal-post", ".modal__form_place");

const newCardButton = document.querySelector(".profile__post-button");
newCardButton.addEventListener("click", () => {
  newCardPopup.open();
  newCardPopup.setEventListeners();
  newCardPopup._handleEscClose();
});

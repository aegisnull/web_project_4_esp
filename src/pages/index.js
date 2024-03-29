import "./index.css"; // agrega la importación del archivo principal de hojas de estilo
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { Api } from "../components/Api.js";

// import images
import close from "../images/close.svg";
import edit from "../images/edit.svg";
import likefill from "../images/like-fill.svg";
import like from "../images/like.svg";
import logo from "../images/logo.svg";
import post from "../images/post.svg";
import trash from "../images/trash.svg";
import { data } from "autoprefixer";

// Variable initialization

// Code to use cards with the template and array
// Select where to put the template cards
const cards = document.querySelector(".cards");
// Create a small fragment to put the cards in
const fragment = document.createDocumentFragment();

// Code to add api
const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/cohort-1-es",
  headers: {
    authorization: "e7cf5ec1-f874-45f0-bd41-d890ac5955db",
    "Content-Type": "application/json",
  },
});

api.getUserInfo();

// Code to add new cards from API
api.getInitialCards().then((data) => {
  data.forEach((item) => {
    const card = new Card(
      item.name,
      item.link,
      item.likes,
      item.owner._id,
      item._id,
      "#cards",
      ".modal-confirmation",
      ".modal__delete-close",
      ".modal__form-delete"
    );
    const cardElement = card.generateCard();
    document.querySelector(".cards").append(cardElement);
  });
  // Add lightbox to the cards
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
  // End of lightbox code
});

// Code to add new cards with the form sumbit
// Event listener for form submit
const newPostForm = document.querySelector(".modal-post");
newPostForm.addEventListener("submit", addNewCard);

// Declare functions to form fields
const newPostName = document.querySelector(".modal__profile-cardtitle");
const newPostLink = document.querySelector(".modal__profile-cardurl");

function addNewCard(evt) {
  evt.preventDefault();
  const cardData = {
    name: newPostName.value,
    link: newPostLink.value,
  };
  api.addNewCard(cardData.name, cardData.link).then((data) => {
    const card = new Card(
      data.name,
      data.link,
      data.likes,
      data.owner._id,
      data._id,
      "#cards",
      ".modal-confirmation",
      ".modal__delete-close",
      ".modal__form-delete"
    );
    const cardElement = card.generateCard();
    document.querySelector(".cards").prepend(cardElement);
    document.querySelector(".modal__form_place").reset();
    // Add lightbox to the cards
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
    // End of lightbox code
  });
}

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
  api.setUserInfo();
});

const newCardPopup = new PopupWithForm(".modal-post", ".modal__form_place");

const newCardButton = document.querySelector(".profile__post-button");
newCardButton.addEventListener("click", () => {
  newCardPopup.open();
  newCardPopup.setEventListeners();
  newCardPopup._handleEscClose();
});

const profileImageEdit = new PopupWithForm(
  ".modal-profile",
  ".modal__form_profile-edit"
);

const profileImageEditSubmit = document.querySelector(
  ".modal__form_profile-edit"
);
profileImageEditSubmit.addEventListener("submit", () => {
  userInfo.setUserAvatar();
  api.setUserAvatar();
});

const profileImageButton = document
  .querySelector(".profile__overlay")
  .addEventListener("click", () => {
    profileImageEdit.open();
    profileImageEdit.setEventListeners();
    profileImageEdit._handleEscClose();
  });

// Logic to add form validator to edit profile image modal
const editProfileImageForm = document.querySelector(
  ".modal__form_profile-edit"
);
const editProfileImageValidation = new FormValidator(
  formSelectors,
  editProfileImageForm
);
editProfileImageValidation.enableValidation();

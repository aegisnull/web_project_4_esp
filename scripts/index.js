import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

// Variable initialization

// Code to use cards with the template and array
// Select where to put the template cards
const cards = document.querySelector(".cards");
// Point to the template
const cardTemplate = document.getElementById("cards").content;
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

initialCards.forEach((item) => {
  const card = new Card(item.name, item.link);
  const cardElement = card.generateCard();
  document.querySelector(".cards").append(cardElement);
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
  cardTemplate
    .querySelector(".card__img")
    .setAttribute("src", newPostLink.value);
  cardTemplate
    .querySelector(".card__img")
    .setAttribute("alt", newPostName.value);
  cardTemplate.querySelector(".card__title").textContent = newPostName.value;

  const clone = document.importNode(cardTemplate, true);
  fragment.append(clone);
  cards.prepend(fragment);
  modalPostClose();
}

// Code for image lightbox
const lightbox = document.createElement("div");
lightbox.id = "lightbox";
document.body.appendChild(lightbox);

const images = document.querySelectorAll(".card__img");
images.forEach((image) => {
  image.addEventListener("click", (e) => {
    lightbox.classList.add("active");
    const img = document.createElement("img");
    img.src = image.src;
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild);
    }
    lightbox.appendChild(img);

    const figureTitle = document.createElement("p");
    figureTitle.textContent = image.alt;
    figureTitle.classList.add("lightbox__title");
    lightbox.appendChild(figureTitle);

    const lightboxClose = document.createElement("button");
    lightboxClose.classList.add("lightbox__close");
    lightbox.appendChild(lightboxClose);

    const lightboxCloseButton = document.querySelector(".lightbox__close");

    lightboxCloseButton.addEventListener("click", closeLightbox);

    function closeLightbox() {
      lightbox.classList.remove("active");
    }
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

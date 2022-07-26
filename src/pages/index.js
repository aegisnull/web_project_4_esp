import "./index.css"; // agrega la importación del archivo principal de hojas de estilo
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Popup } from "../components/Popup.js";
//import { modalPostClose } from "../components/utils.js";

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

initialCards.forEach((item) => {
  const card = new Card(item.name, item.link, "#cards");
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
  const newCard = new Card(newPostName.value, newPostLink.value, "#cards");
  const cardElement = newCard.generateCard();
  fragment.append(cardElement);
  cards.prepend(fragment);
  modalPostClose();
}

// Code for image lightbox
const lightbox = document.createElement("div");
lightbox.id = "lightbox";
lightbox.classList.add("popup");
document.body.appendChild(lightbox);

const images = document.querySelectorAll(".card__img");
images.forEach((image) => {
  image.addEventListener("click", () => {
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

//temp import
const createPostButton = document.querySelector(".profile__post-button");
const modalPost = document.querySelector(".modal-post");
const postCloseButton = document.querySelector(".modal-post__close");
const editButton = document.querySelector(".profile__edit-button");
const modal = document.querySelector(".modal");
const profileCloseButton = document.querySelector(".modal__close");

//Controls for edit modal opening
// Event listener for edit button click
editButton.addEventListener("click", openModal);

// Function to open modal and in the process set the values of the form fields same as the profile fields
function openModal() {
  modal.classList.add("modal_active");
  formName.placeholder = profileName.textContent;
  formTitle.placeholder = profileTitle.textContent;
}

//Controls for edit modal closing
// Event listener for close button click
profileCloseButton.addEventListener("click", closeModal);

function closeModal() {
  modal.classList.remove("modal_active");
}

// Event listener for createPostButton button click
createPostButton.addEventListener("click", modalPostOpen);

// Function to open modal and in the process set the values of the form fields same as the profile fields
function modalPostOpen() {
  modalPost.classList.add("modal-post_active");
}

//Controls for edit modal closing
// Event listener for close button click
postCloseButton.addEventListener("click", modalPostClose);

export function modalPostClose() {
  modalPost.classList.remove("modal-post_active");
}

// Close modal on esc key press
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modalPostClose();
    closeModal();
  }
});

// Close modal on click outside of the lightbox
const lightboxClose = document.createElement("div");
lightboxClose.addEventListener("click", (e) => {
  if (e.target === lightboxClose) {
    lightboxClose.classList.remove("active");
  }
});

// Close modal on click outside of the profile modal
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// Close modal on click outside of the new post modal
modalPost.addEventListener("click", (e) => {
  if (e.target === modalPost) {
    modalPostClose();
  }
});

const formName = document.querySelector(".modal__profile-name");
const formTitle = document.querySelector(".modal__profile-title");
const profileName = document.querySelector(".profile__name");
const profileTitle = document.querySelector(".profile__title");

const form = document.querySelector(".modal__form");

// Event listener for form submit
form.addEventListener("submit", updateNameAndTitle);

//Function to update the profile name and title
function updateNameAndTitle(evt) {
  evt.preventDefault();

  const formNameValue = formName.value;
  const formTitleValue = formTitle.value;

  profileName.textContent = formNameValue;
  profileTitle.textContent = formTitleValue;

  closeModal();
}

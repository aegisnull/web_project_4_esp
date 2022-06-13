// Variable initialization
let editButton = document.querySelector(".profile__edit-button");
let modal = document.querySelector(".modal");
let formName = document.querySelector(".modal__profile-name");
let formTitle = document.querySelector(".modal__profile-title");
let profileName = document.querySelector(".profile__name");
let profileTitle = document.querySelector(".profile__title");
let profileCloseButton = document.querySelector(".modal__close");
let form = document.querySelector(".modal__form");
let createPostButton = document.querySelector(".profile__post-button");
let modalPost = document.querySelector(".modal-post");
let postCloseButton = document.querySelector(".modal-post__close");

//Controls for edit modal opening
// Event listener for edit button click
editButton.addEventListener("click", modalOpen);

// Function to open modal and in the process set the values of the form fields same as the profile fields
function modalOpen() {
  modal.classList.add("modal_active");
  formName.value = profileName.textContent;
  formTitle.value = profileTitle.textContent;
}

//Controls for edit modal closing
// Event listener for close button click
profileCloseButton.addEventListener("click", modalClose);

function modalClose() {
  modal.classList.remove("modal_active");
}

// Event listener for form submit
form.addEventListener("submit", updateNameAndTitle);

//Function to update the profile name and title
function updateNameAndTitle(evt) {
  evt.preventDefault();

  const formNameValue = formName.value;
  const formTitleValue = formTitle.value;

  profileName.textContent = formNameValue;
  profileTitle.textContent = formTitleValue;

  modalClose();
  console.log("form submited");
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

function modalPostClose() {
  modalPost.classList.remove("modal-post_active");
}

// Code to use cards with the template and array
// Select where to put the template cards
const cards = document.querySelector(".cards");
// Point to the template
const cardTemplate = document.getElementById("cards").content;
// Create a small fragment to put the cards in
const fragment = document.createDocumentFragment();
const cardContent = document.querySelector(".card-content");
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

// forEach loop to create cards from the array
initialCards.forEach((el) => {
  cardTemplate.querySelector(".card__img").setAttribute("src", el.link);
  cardTemplate.querySelector(".card__img").setAttribute("alt", el.name);
  cardTemplate.querySelector(".card__title").textContent = el.name;

  let clone = document.importNode(cardTemplate, true);
  fragment.append(clone);
});

cards.append(fragment);

// Code to add new cards with the form sumbit
// Event listener for form submit
let newPostForm = document.querySelector(".modal-post");
newPostForm.addEventListener("submit", addNewCard);

// Declare functions to form fields
let newPostName = document.querySelector(".modal__profile-cardtitle");
let newPostLink = document.querySelector(".modal__profile-cardurl");

function addNewCard(evt) {
  evt.preventDefault();
  cardTemplate
    .querySelector(".card__img")
    .setAttribute("src", newPostLink.value);
  cardTemplate
    .querySelector(".card__img")
    .setAttribute("alt", newPostName.value);
  cardTemplate.querySelector(".card__title").textContent = newPostName.value;

  let clone = document.importNode(cardTemplate, true);
  fragment.append(clone);
  cards.prepend(fragment);
  modalPostClose();
}

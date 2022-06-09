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
let cardTitle = document.querySelector(".modal__profile-cardtitle");
let cardURL = document.querySelector(".modal__profile-cardurl");
let cardTemplate = document
  .querySelector("#cards")
  .content.querySelector(".card__container");

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
function updateNameAndTitle() {
  profileName.textContent = formName.value;
  profileTitle.textContent = formTitle.value;
}

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

//Code to add cards to the page
let createCard = (data) => {
  let cardElement = cardTemplate.cloneNode(true);
  let cardTitle = cardElement.querySelector(".card__title");
  let cardImage = cardElement.querySelector(".card__img");
  let cardLike = cardElement.querySelector(".card__like-button");
  let cardRemove = cardElement.querySelector(".card__delete-button");

  cardTitle.textContent = data.name;
  cardImage.style.backgroundImage = `url(${data.link})`;

  cardLike.addEventListener("click", () => {
    cardLike.classList.toggle("card__like-button_active");
  });

  cardRemove.addEventListener("click", () => {
    cardImage.parentNode.remove();
  });

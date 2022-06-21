// Variable initialization
const editButton = document.querySelector(".profile__edit-button");
const modal = document.querySelector(".modal");
const formName = document.querySelector(".modal__profile-name");
const formTitle = document.querySelector(".modal__profile-title");
const profileName = document.querySelector(".profile__name");
const profileTitle = document.querySelector(".profile__title");
const profileCloseButton = document.querySelector(".modal__close");
const form = document.querySelector(".modal__form");
const createPostButton = document.querySelector(".profile__post-button");
const modalPost = document.querySelector(".modal-post");
const postCloseButton = document.querySelector(".modal-post__close");

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

// Code to remove cards with the delete button
// Remove button event listener on click
let removeButton = document.querySelectorAll(".card__remove-button");
for (let i = 0; i < removeButton.length; i++) {
  removeButton[i].addEventListener("click", (e) => {
    removeCard(e);
  });
  function removeCard(evt) {
    evt.target.parentElement.remove();
  }
}

const likeButton = document.querySelectorAll(".card__like-button");
for (let i = 0; i < likeButton.length; i++) {
  likeButton[i].addEventListener("click", (e) => {
    likeCard(e);
  });
  function likeCard(evt) {
    evt.target.classList.toggle("card__like-button_active");
  }
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
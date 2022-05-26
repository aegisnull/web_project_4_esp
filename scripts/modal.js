// Variable initialization
let editButton = document.querySelector(".profile__edit-button");
let modal = document.querySelector(".modal");
let formName = document.querySelector(".modal__profile-name");
let formTitle = document.querySelector(".modal__profile-title");
let profileName = document.querySelector(".profile__name");
let profileTitle = document.querySelector(".profile__title");
let closeButton = document.querySelector(".modal__close");
let form = document.querySelector(".modal__form");

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
closeButton.addEventListener("click", modalClose);

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

// Controls for active like button
let likeButton = document.querySelector(".card__like-button");

// Event listener for like button click
likeButton.addEventListener("click", likeButtonClick);

// Add class on button click
function likeButtonClick() {
  likeButton.classList.toggle("card__like-button_active");
}

// Variable initialization
let editButton = document.querySelector(".profile__edit-button");
let modal = document.querySelector(".modal");
let formName = document.querySelector(".modal__profile-name");
let formTitle = document.querySelector(".modal__profile-title");
let profileName = "Luis Tellez";
let profileTitle = "Web developer";
let closeButton = document.querySelector(".modal__close");
let form = document.querySelector(".modal__form");

//Controls for edit modal opening
// Event listener for edit button click
editButton.addEventListener("click", modalOpen);

// Function to open modal and in the process set the values of the form fields same as the profile fields
function modalOpen() {
  modal.classList.add("modal_active");
  formName.value = profileName;
  formTitle.value = profileTitle;
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

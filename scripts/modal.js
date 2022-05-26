let editButton = document.querySelector(".profile__edit-button");
let modal = document.querySelector(".modal");
let formName = document.querySelector(".modal__profile-name");
let formTitle = document.querySelector(".modal__profile-title");
let profileName = document.querySelector(".profile__name");
let profileTitle = document.querySelector(".profile__title");

editButton.addEventListener("click", modalOpen);

function modalOpen() {
  modal.classList.add("modal_active");
  formName.value = profileName.textContent;
  formTitle.value = profileTitle.textContent;
}

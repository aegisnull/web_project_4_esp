let editButton = document.querySelector(".profile__edit-button");
let modal = document.querySelector(".modal");
let overlay = document.querySelector(".modal__overlay");
let formName = document.querySelector(".modal__profile-name");
let formTitle = document.querySelector(".modal__profile-title");
let profileName = document.querySelector(".profile__name");
let profileTitle = document.querySelector(".profile__title");

editButton.addEventListener("click", modalOpen);

function modalOpen() {
  overlay.classList.add("modal__overlay_active");
  modal.classList.add("modal_active");
  formName.insertAdjacentHTML("beforeend", `value="${profileName}`);
}

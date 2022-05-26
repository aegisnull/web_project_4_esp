let editButton = document.querySelector(".profile__edit-button");
let modal = document.querySelector(".modal");
let container = document.querySelector(".modal__container");
let overlay = document.querySelector(".modal__overlay");

editButton.addEventListener("click", modalOpen);

function modalOpen() {
  overlay.classList.add("modal__overlay_active");
}

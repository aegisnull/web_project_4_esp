let editButton = document.querySelector(".profile__edit-button");
let modal = document.querySelector(".modal");
let container = document.querySelector(".modal__container");
let overlay = document.querySelector(".modal__overlay");

editButton.addEventListener("click", modalOpen);

function modalOpen() {
  modal.classList.add("modal_active");
  container.classList.add("modal__container_active");
  overlay.classList.add("modal__overlay_active");
}

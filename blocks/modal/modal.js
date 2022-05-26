let editButton = document.querySelector(".profile__edit-button");
let modal = document.querySelector(".modal");
let overlay = document.querySelector(".modal__overlay");

editButton.addEventListener("click", modalOpen);

function modalOpen() {
  overlay.classList.add("modal__overlay_active");
  modal.classList.add("modal_active");
}

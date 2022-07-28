//temp
const createPostButton = document.querySelector(".profile__post-button");
const modalPost = document.querySelector(".modal-post");
const postCloseButton = document.querySelector(".modal-post__close");
const editButton = document.querySelector(".profile__edit-button");
const modal = document.querySelector(".modal");
const profileCloseButton = document.querySelector(".modal__close");

//Controls for edit modal opening
// Event listener for edit button click
editButton.addEventListener("click", openModal);

// Function to open modal and in the process set the values of the form fields same as the profile fields
function openModal() {
  modal.classList.add("modal_active");
  formName.placeholder = profileName.textContent;
  formTitle.placeholder = profileTitle.textContent;
}

//Controls for edit modal closing
// Event listener for close button click
profileCloseButton.addEventListener("click", closeModal);

function closeModal() {
  modal.classList.remove("modal_active");
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

export function modalPostClose() {
  modalPost.classList.remove("modal-post_active");
}

// Close modal on esc key press
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modalPostClose();
    closeModal();
  }
});

// Close modal on click outside of the lightbox
const lightboxClose = document.createElement("div");
lightboxClose.addEventListener("click", (e) => {
  if (e.target === lightboxClose) {
    lightboxClose.classList.remove("active");
  }
});

// Close modal on click outside of the profile modal
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// Close modal on click outside of the new post modal
modalPost.addEventListener("click", (e) => {
  if (e.target === modalPost) {
    modalPostClose();
  }
});

const formName = document.querySelector(".modal__profile-name");
const formTitle = document.querySelector(".modal__profile-title");
const profileName = document.querySelector(".profile__name");
const profileTitle = document.querySelector(".profile__title");

const form = document.querySelector(".modal__form");

// Event listener for form submit
form.addEventListener("submit", updateNameAndTitle);

//Function to update the profile name and title
function updateNameAndTitle(evt) {
  evt.preventDefault();

  const formNameValue = formName.value;
  const formTitleValue = formTitle.value;

  profileName.textContent = formNameValue;
  profileTitle.textContent = formTitleValue;

  closeModal();
}

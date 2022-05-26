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
  formName.value = profileName;
}
































// Busquemos el formulario en el DOM
let formElement = document.querySelector(.modal__form) // Utiliza el método querySelector()

// Lo siguiente es el manipulador (handler) de entrega de formularios, aunque
// no se enviará en ningún sitio todavía

// Observa que el nombre de la función comienza con un verbo
// y describe exactamente lo que hace la función
function handleProfileFormSubmit(evt) {
    // Esta línea impide que el navegador
    // entregue el formulario en su forma predeterminada.
    evt.preventDefault();
    // Una vez hecho esto, podemos definir nuestra propia forma de entregar el formulario.
    // Lo explicaremos todo con más detalle después.

    // Busquemos los campos del formulario en el DOM
    let nameInput = formElement.querySelector(.modal__profile-name) // Use querySelector()
    let jobInput = formElement.querySelector(.modal__profile-title) // Use querySelector()

    // Obtén los valores de cada campo desde la propiedad de valor correspondiente
    let name = document.querySelector(.profile__name)
    let job = document.querySelector(.profile__title)

    // Selecciona los elementos donde se introducirán los valores de los campos

    // Inserta nuevos valores utilizando el textContent
    nameInput.textContent = name
    jobInput.textContent = job

    // propiedad del método querySelector()
}

// Conecta el manipulador (handler) al formulario:
// se observará el evento de entrega
formElement.addEventListener('submit', handleProfileFormSubmit);
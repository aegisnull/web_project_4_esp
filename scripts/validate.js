// habilitar la validación llamando a enableValidation()
// pasar todas las configuraciones en la llamada

enableValidation({
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__form-submit_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
});

// Function to add eventListeners
function enableValidation(settings) {
  const forms = document.querySelectorAll(settings.formSelector);
  forms.forEach((form) => {
    setEventListeners(form, settings);
  });
}

function setEventListeners(form, settings) {
  const inputs = form.querySelectorAll(settings.inputSelector);
  const button = form.querySelector(settings.submitButtonSelector);

  inputs.forEach((input) => {
    // Add event listenser
    input.addEventListener("input", (event) => {
      // Check validation
      checkInputValidity(input, settings);
      checkInputs(inputs, button);
      changeErrorText(input, settings);
    });
  });
}

// Function to enable and disable submit button
function checkInputs(inputs, button) {
  const inputArr = Array.from(inputs);
  if (inputArr.every((input) => input.validity.valid)) {
    enableButton(button);
  } else {
    disableButton(button);
  }
}

function disbaleButton(button) {
  button.disabled = true;
}

function enableButton(button) {
  button.disabled = false;
}

// Function to check input validity
function checkInputValidity(input, settings) {
  if (input.validity.valid) {
    removeErrorStyling(input);
  } else {
    addErrorStyling(input);
  }
}

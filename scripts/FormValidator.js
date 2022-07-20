class FormValidator {
  constructor(formSelectors, formElement) {
    this._form = formElement;
    this._formSelector = formSelectors.formSelector;
    this._inputSelector = formSelectors.inputSelector;
    this._submitButtonSelector = formSelectors.submitButtonSelector;
    this._inactiveButtonClass = formSelectors.inactiveButtonClass;
    this._inputErrorClass = formSelectors.inputErrorClass;
    this._errorClass = formSelectors.errorClass;
    this._inputList = [...this._form.querySelectorAll(this._inputSelector)];
    this._buttonElement = this._form.querySelector(this._submitButtonSelector);
  }

  enableValidation({
    formSelector: ".modal__form",
    inputSelector: ".modal__input",
    submitButtonSelector: ".modal__form-submit",
    inactiveButtonClass: "modal__form-submit_disabled",
    inputErrorClass: "modal__input_type_error",
    errorClass: "modal__error_visible",
  });

  _setEventListeners(form, settings) {
    const inputs = form.querySelectorAll(settings.inputSelector);
    const button = form.querySelector(settings.submitButtonSelector);

    this.input.addEventListener("input", (event) => {
      // Check validation
      checkInputValidity(input, settings);
      checkInputs(inputs, button);
    });
  }

  enableValidation(settings) {
    this._form.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
}

export { FormValidator };

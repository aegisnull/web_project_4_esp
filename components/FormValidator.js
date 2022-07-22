class FormValidator {
  constructor(formSelectors, formElement) {
    this._inputSelector = formSelectors.inputSelector;
    this._submitButtonSelector = formSelectors.submitButtonSelector;
    this._inactiveButtonClass = formSelectors.inactiveButtonClass;
    this._inputErrorClass = formSelectors.inputErrorClass;
    this._errorClass = formSelectors.errorClass;
    this._formElement = formElement;
  }

  _addErrorStyling(input) {
    const error = this._formElement.querySelector(`#${input.id}-error`);
    input.classList.add(this._inputErrorClass);
    error.textContent = input.validationMessage;

    error.classList.add(this._errorClass);
  }

  _removeErrorStyling(input) {
    const error = this._formElement.querySelector(`#${input.id}-error`);
    input.classList.remove(this._inputErrorClass);
    error.classList.remove(this._errorClass);
    error.textContent = "";
  }

  _checkInputValidity(input) {
    if (input.validity.valid) {
      this._removeErrorStyling(input);
    } else {
      this._addErrorStyling(input);
    }
  }

  _toggleButtonState(inputs, button) {
    const isValid = inputs.every((input) => input.validity.valid);

    if (isValid) {
      button.disabled = false;
    } else {
      button.disabled = true;
    }
  }

  _setEventListeners() {
    const inputs = Array.from(
      this._formElement.querySelectorAll(this._inputSelector)
    );
    const button = this._formElement.querySelector(this._submitButtonSelector);

    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        this._checkInputValidity(input);
        this._toggleButtonState(inputs, button);
      });
    });
  }

  enableValidation() {
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    this._setEventListeners();
  }
}

export { FormValidator };

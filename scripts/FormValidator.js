class FormValidator {
  constructor(formSelectors, formElement) {
    this._formSelectors = formSelectors;
    this._formElement = formElement;
  }

  _showErrorMessage(input) {}

  _hideErrorMessage(input) {}

  _checkInputValidity(input) {}

  _toggleSubmitButtonState(inputs, button) {}

  enableValidation() {}
}

export { FormValidator };

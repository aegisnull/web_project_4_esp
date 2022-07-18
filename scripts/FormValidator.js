class FormValidator {
  constructor(formSelectors, formElement) {
    this._formSelectors = formSelectors;
    this._formElement = formElement;
  }

  _showErrorMessage(input) {}

  _hideErrorMessage(input) {}

  _checkInputValidity(input) {}

  _toggleSubmitButtonState(inputs) {}

  _setEventListeners() {}

  enableValidation() {
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    const inputs = [
      this._formElement.querySelectorAll(this._formSelectors.inputSelector),
    ];
    const button = this._formElement.querySelector(
      this._formSelectors.submitButtonSelector
    );

    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        this._checkInputValidity(input);
        this._toggleSubmitButtonState(inputs);
      }
  }
}

export { FormValidator };

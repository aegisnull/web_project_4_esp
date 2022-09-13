import { Popup } from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popup, formSelector) {
    super(popup);
    this._formSelector = document.querySelector(formSelector);
  }

  _getInputValues() {
    this._inputList = this._popup.querySelectorAll(".modal__input");
    const inputValues = {};
    this._inputList.forEach((field) => {
      inputValues[field.name] = field.value;
    });
    return inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._formSelector.addEventListener("submit", (e) => {
      e.preventDefault();
      this._getInputValues();
      this.close();
    });
  }

  close() {
    super.close();
    const formSubmitButton = this._formSelector.querySelector(
      ".modal__form-submit"
    );
    formSubmitButton.textContent = "Guardar";
    // this._formSelector.reset();
  }
}

export { PopupWithForm };

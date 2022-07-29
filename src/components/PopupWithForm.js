import { Popup } from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popupSelector, formSelector) {
    super(popupSelector);
    this._formSelector = document.querySelector(formSelector);
  }

  _getInputValues() {
    this._inputList = this._popup.querySelectorAll(".modal__input");
    this._inputValues = {};
    this._inputList.forEach((input) => {
      this._inputValues[input.name] = input.value;
    });
    return this._inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._formSelector.addEventListener("submit", (e) => {
      e.preventDefault();
      this.close();
    });
  }

  close() {
    super.close();
  }
}

export { PopupWithForm };

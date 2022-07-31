import { Popup } from "../components/Popup.js";

class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
    this._popupImage = this._popup.querySelector(".popup__image");
    this._popupCaption = this._popup.querySelector(".popup__title");
  }

  open(image) {
    this._popupImage.src = image.src;
    this._popupCaption.textContent = image.alt;
    this._popup.classList.add("active");
  }

  close() {
    this._popup.classList.remove("active");
  }
}

export { PopupWithImage };

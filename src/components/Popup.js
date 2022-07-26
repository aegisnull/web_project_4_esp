class Popup {
  constructor(popup) {
    this._popup = popup;
  }

  open() {
    this._popup.classList.add("modal_active");
  }

  close() {
    this._popup.classList.remove("modal_active");
  }
}

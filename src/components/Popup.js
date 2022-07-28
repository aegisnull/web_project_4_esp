class Popup {
  constructor(popup) {
    this._popup = document.querySelector(popup);
  }

  open() {
    this._popup.classList.add("modal_active");
  }

  close() {
    this._popup.classList.remove("modal_active");
  }

  _handleEscClose() {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.close();
      }
    });
  }

  setEventListeners() {
    const closePopupButton = this._popup.querySelector(".modal__close-button");
    this.closePopupButton.addEventListener("click", this.close);
  }

  removeEventListeners() {
    const closePopupButton = this._popup.querySelector(".modal__close");
    closePopupButton.removeEventListener("click", this.close);
  }
}

export { Popup };

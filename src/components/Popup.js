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

  _handleEscClose() {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.close();
      }
    });
  }

  setEventListeners() {
    const closePopupButton = this._popup.querySelector(".modal__close");
    closePopupButton.addEventListener("click", this.close);
  }
}

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
    this._popup
      .querySelector(".modal__close-button")
      .addEventListener("click", () => {
        this.close();
      });
    this._popup.addEventListener("click", (e) => {
      if (e.target === this._popup) {
        this.close();
      }
    });
  }
}

export { Popup };

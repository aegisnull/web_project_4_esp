class UserInfo {
  constructor(userName, userPosition) {
    this._user = document.querySelector(userName);
    this._position = document.querySelector(userPosition);
    this._popupUserField = document.querySelector(".modal__profile-name");
    this._popupUserPosition = document.querySelector(".modal__profile-title");
  }

  getUserInfo() {
    this._popupUserField.placeholder = this._user.textContent;
    this._popupUserPosition.placeholder = this._position.textContent;
  }

  setUserInfo() {
    this._user.textContent = this._popupUserField.value;
    this._position.textContent = this._popupUserPosition.value;
  }
}

export { UserInfo };

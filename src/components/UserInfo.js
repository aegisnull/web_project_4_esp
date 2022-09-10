class UserInfo {
  constructor(userName, userPosition) {
    this._user = document.querySelector(userName);
    this._position = document.querySelector(userPosition);
    this._avatar = document.querySelector(".profile__img");
    this._popupUserField = document.querySelector(".modal__profile-name");
    this._popupUserPosition = document.querySelector(".modal__profile-title");
    this._popupUserAvatar = document.querySelector(".modal__profile-url");
  }

  getUserInfo() {
    this._popupUserField.placeholder = this._user.textContent;
    this._popupUserPosition.placeholder = this._position.textContent;
  }

  setUserInfo() {
    this._user.textContent = this._popupUserField.value;
    this._position.textContent = this._popupUserPosition.value;
  }

  setUserAvatar() {
    this._avatar.src = this._popupUserAvatar.value;
  }
}

export { UserInfo };

class UserInfo {
  constructor(userName, userPosition) {
    this._user = document.querySelector(userName);
    this._position = document.querySelector(userPosition);
  }

  getUserInfo() {
    const popupUserField = document.querySelector(".modal__profile-name");
    const popupUserPosition = document.querySelector(".modal__profile-title");

    popupUserField.placeholder = this._user.textContent;
    popupUserPosition.placeholder = this._position.textContent;
  }

  setUserInfo(name, position) {
    this._user.textContent = name;
    this._position.textContent = position;
  }
}

export { UserInfo };

class UserInfo {
  constructor(userName, userPosition) {
    this._user = document.querySelector(userName);
    this._position = document.querySelector(userPosition);
  }

  getUserInfo() {
    const profile = {};
    profile.name = this._user.textContent;
    profile.position = this._position.textContent;
    return profile;
  }

  setUserInfo(name, position) {
    this._user.textContent = name;
    this._position.textContent = position;
  }
}

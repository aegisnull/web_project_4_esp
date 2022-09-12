class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  //GET https://around.nomoreparties.co/v1/groupId/users/me
  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: this._headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        username.textContent = data.name;
        userPosition.textContent = data.about;
        userAvatar.src = data.avatar;
      })
      .catch((err) => {
        console.log("Error. La solicitud ha fallado");
      });
  }

  //PATCH https://around.nomoreparties.co/v1/groupId/users/me
  setUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: username.textContent,
        about: userPosition.textContent,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        username.textContent = data.name;
        userPosition.textContent = data.about;
      })
      .catch((err) => {
        console.log("Error. La solicitud ha fallado");
      });
  }

  //PATCH https://around.nomoreparties.co/v1/groupId/users/me/avatar
  setUserAvatar() {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: userAvatar.src,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        userAvatar.src = data.avatar;
      })
      .catch((err) => {
        console.log("Error. La solicitud ha fallado");
      });
  }

  //GET https://around.nomoreparties.co/v1/groupId/cards
  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      method: "GET",
      headers: this._headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        return data;
      })
      .catch((err) => {
        console.log("Error. La solicitud ha fallado");
      });
  }
}

// Variables
const username = document.querySelector(".profile__name");
const userPosition = document.querySelector(".profile__title");
const userAvatar = document.querySelector(".profile__img");

export { Api };

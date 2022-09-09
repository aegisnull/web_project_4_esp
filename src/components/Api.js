class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  //GET https://around.nomoreparties.co/v1/groupId/users/me
  getUserInfo() {
    // Variables
    const username = document.querySelector(".profile__name");
    const userPosition = document.querySelector(".profile__title");

    // FETCH request
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: this._headers,
    })
      .then((res) => res.json())
      .then((data) => {
        username.textContent = data.name;
        userPosition.textContent = data.about;
      })
      .catch((err) => {
        console.log("Error. La solicitud ha fallado");
      });
  }
}
export { Api };

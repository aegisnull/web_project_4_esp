class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  //the link for the petition via GET is https://around.nomoreparties.co/v1/groupId/users/me
  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
        console.log(res);
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  // Code to declare API
}

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/cohort-1-es",
  headers: {
    authorization: "e7cf5ec1-f874-45f0-bd41-d890ac5955db",
    "Content-Type": "application/json",
  },
});

export { Api };

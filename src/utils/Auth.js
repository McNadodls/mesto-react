class Auth {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
  }

  _checkResponse (res) {
    if (res.ok) {
      return res.json();
    }
    return this.enterError(res);
  }
  enterError (err) {
    Promise.reject(`Ошибка: ${err.status}`);
  }

  singnup(email, password) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers:{
        "Content-Type": "application/json" 
      },
      body: JSON.stringify({
        "email": email,
        "password": password
      })
    })
    .then(this._checkResponse);
  }

  signin(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers:{
        "Content-Type": "application/json" 
      },
      body: JSON.stringify({
        "email": email,
        "password": password
      })
    })
    .then(this._checkResponse);
  }

  getUserInfo(email, token) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'GET',
      headers:{
        "Content-Type": "application/json",
    "Authorization" : `Bearer ${token}`
      }
    })
    .then(this._checkResponse);
  }


}
export default new Auth('https://auth.nomoreparties.co'); 
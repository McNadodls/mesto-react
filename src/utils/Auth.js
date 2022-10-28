<<<<<<< HEAD
class Auth {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
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
    .then((res) => { if (res.ok) {return res.json()}})
            .then(res => res);
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
    .then((res) => { if (res.ok) {return res.json()}})
            .then(res => res);
  }

  getToken (jwt) {
    return fetch(`${this._baseUrl}/users/me`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization" : `Bearer ${jwt}`
        }
    })
        .then((res) => { if (res.ok) {return res.json()}})
        .then(res=>res);
  }




}
=======
class Auth {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
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
    .then((res) => { if (res.ok) {return res.json()}})
            .then(res => res);
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
    .then((res) => { if (res.ok) {return res.json()}})
            .then(res => res);
  }

  getToken (jwt) {
    return fetch(`${this._baseUrl}/users/me`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization" : `Bearer ${jwt}`
        }
    })
        .then((res) => { if (res.ok) {return res.json()}})
        .then(res=>res);
  }




}
>>>>>>> c7baf28ad85f6f5949ab4e0648b2a5ad4030a529
export default new Auth('https://auth.nomoreparties.co'); 
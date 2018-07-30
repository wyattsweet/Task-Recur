const localStorageHelper = {
  fetchToken() {
    return localStorage.getItem('token')
  },

  saveToken(token) {
    localStorage.setItem('token', token)
  },

  removeToken() {
    localStorage.removeItem('token')
  },
}

export default localStorageHelper

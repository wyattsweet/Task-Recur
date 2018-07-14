const localStorageHelper = {
  fetchToken() {
    return localStorage.getItem('token')
  },

  saveToken(token) {
    localStorage.setItem('token', token)    
  }
}

export default localStorageHelper

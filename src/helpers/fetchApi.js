import localStorageHelper from './localStorage'
// TODO: pull this function in to every component that is making an api request
const fetchApi = {
  user: {
    signOut() {
      localStorageHelper.removeToken()
    },
  },
}

export default fetchApi

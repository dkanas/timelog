import axios from 'axios'

const createURL = parts => ['api', ...parts].join('/')

const api = {
  checkAuth: () => axios({
    url: createURL('user', 'checkAuth')
  })
}

export default api

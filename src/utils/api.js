import axios from 'axios'

axios.interceptors.response.use(
  response => [null, response.data],
  err => [err]
)

const createURL = parts => ['api', ...parts].join('/')

const api = {
  getCurrentUserDetails: () => axios({
    url: createURL(['user', 'details'])
  })
}

export default api

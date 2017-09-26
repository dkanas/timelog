import { api, to, logError } from 'utils'
import { browserHistory } from 'react-router'

// constants
const GET_USER_DETAILS_SUCCESS = 'GET_USER_DETAILS_SUCCESS'

const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'

// action creators
const getUserDetailsSuccess = user => ({ type: GET_USER_DETAILS_SUCCESS, user })

const login = () => ({ type: LOGIN })
export const logout = () => ({ type: LOGOUT })

// thunks
export const getUserDetails = () => async dispatch => {
  const [err, user] = await api.getCurrentUserDetails()
  if (err) throw err

  dispatch(getUserDetailsSuccess(user))
  return user
}

export const checkAuth = () => async dispatch => {
  const [err] = await to(dispatch(getUserDetails()))
  if (err) {
    browserHistory.push('/')
    if (err.response.status !== 401) logError(err)
  } else dispatch(login())
}

// action handlers
const handlers = {
  [GET_USER_DETAILS_SUCCESS]: (state, { user }) => ({ ...state, user }),

  [LOGIN]: state => ({ ...state, isAuthenticated: true, loading: false }),
  [LOGOUT]: () => initialState
}

const initialState = {
  user: null,
  loading: true,
  isAuthenticated: false,
}

// reducer
export default function sessionReducer (state = initialState, action) {
  const handler = handlers[action.type]

  return handler ? handler(state, action) : state
}

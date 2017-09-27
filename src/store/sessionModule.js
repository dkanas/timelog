import { api, to, logError } from 'utils'
import { browserHistory } from 'react-router'

// constant
const GET_USER_DETAILS_REQUEST = 'GET_USER_DETAILS_REQUEST'
const GET_USER_DETAILS_SUCCESS = 'GET_USER_DETAILS_SUCCESS'
const GET_USER_DETAILS_FAILURE = 'GET_USER_DETAILS_FAILURE'

const AUTH_REQUEST = 'AUTH_REQUEST'
const AUTH_SUCCESS = 'AUTH_SUCCESS'
const AUTH_FAILURE = 'AUTH_FAILURE'

const LOGOUT = 'LOGOUT'

// action creators
const getUserDetailsRequest = () => ({ type: GET_USER_DETAILS_REQUEST })
const getUserDetailsSuccess = user => ({ type: GET_USER_DETAILS_SUCCESS, user })
const getUserDetailsFailure = () => ({ type: GET_USER_DETAILS_FAILURE })

const authRequest = () => ({ type: AUTH_REQUEST })
const authSuccess = () => ({ type: AUTH_SUCCESS })
const authFailure = () => ({ type: AUTH_FAILURE })

export const logout = () => ({ type: LOGOUT })

// thunks
export const getUserDetails = () => async dispatch => {
  dispatch(getUserDetailsRequest())
  const [err, user] = await api.getCurrentUserDetails()
  if (err) {
    dispatch(getUserDetailsFailure())
    throw err
  }

  dispatch(getUserDetailsSuccess(user))
}

export const checkAuth = () => async dispatch => {
  dispatch(authRequest())
  const [err] = await to(dispatch(getUserDetails()))
  if (err) {
    browserHistory.push('/')
    if (err.response.status !== 401) logError(err)
    dispatch(authFailure())
  } else {
    dispatch(authSuccess())
    browserHistory.push('/dashboard')
  }
}

// action handlers
const handlers = {
  [GET_USER_DETAILS_REQUEST]: state => ({ ...state, userDataLoading: true }),
  [GET_USER_DETAILS_SUCCESS]: (state, { user }) => ({ ...state, user, userDataLoading: false }),
  [GET_USER_DETAILS_FAILURE]: state => ({ ...state, error: true }),

  [AUTH_REQUEST]: state => ({ ...state, authLoading: true }),
  [AUTH_SUCCESS]: state => ({ ...state, authLoading: false, isAuthenticated: true }),
  [AUTH_FAILURE]: state => ({ ...state, authLoading: false, isAuthenticated: false, error: true }),

  [LOGOUT]: () => initialState
}

const initialState = {
  userDataLoading: false,
  authLoading: false,
  user: null,
  isAuthenticated: false,
  error: null
}

// reducer
export default function sessionReducer (state = initialState, action) {
  const handler = handlers[action.type]

  return handler ? handler(state, action) : state
}

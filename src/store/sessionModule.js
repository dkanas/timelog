import { api, to } from 'utils'

// constants
const GET_USER_DETAILS_REQUEST = 'GET_USER_DETAILS_REQUEST'
const GET_USER_DETAILS_SUCCESS = 'GET_USER_DETAILS_SUCCESS'
const GET_USER_DETAILS_FAILURE = 'GET_USER_DETAILS_FAILURE'

const LOGOUT = 'LOGOUT'

// action creators
const getUserDetailsRequest = () => ({ type: GET_USER_DETAILS_REQUEST })
const getUserDetailsSuccess = user => ({ type: GET_USER_DETAILS_SUCCESS, user })
const getUserDetailsFailure = () => ({ type: GET_USER_DETAILS_FAILURE })

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
  return user
}

// action handlers
const handlers = {
  [GET_USER_DETAILS_REQUEST]: state => ({ ...state, loading: true }),
  [GET_USER_DETAILS_SUCCESS]: (state, { user }) => ({ ...state, user, loading: false, isAuthenticated: true }),
  [GET_USER_DETAILS_FAILURE]: state => ({ ...state, loading: false }),

  [LOGOUT]: () => initialState
}

const initialState = {
  user: null,
  loading: false,
  isAuthenticated: false,
}

// reducer
export default function sessionReducer (state = initialState, action) {
  const handler = handlers[action.type]

  return handler ? handler(state, action) : state
}

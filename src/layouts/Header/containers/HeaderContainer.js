import React from 'react'
import { connect } from 'react-redux'
import pick from 'lodash/pick'

import { logout } from 'store/sessionModule'
import Header from '../components/Header'

const Connect = connect(
  state => pick(state.session, ['user', 'isAuthenticated']),
  { logout }
)
const HeaderContainer = ({ isAuthenticated, user, logout }) => (
  <Header
    logout={logout}
    isAuthenticated={isAuthenticated}
    user={user} />
)

export default Connect(HeaderContainer)

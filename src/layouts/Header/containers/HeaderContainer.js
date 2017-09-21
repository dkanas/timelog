import React from 'react'
import { connect } from 'react-redux'
import pick from 'lodash/pick'

import Header from '../components/Header'

const Connect = connect(
  state => pick(state.session, ['user', 'isAuthenticated'])
)
const HeaderContainer = ({ isAuthenticated, user }) => (
  <Header
    isAuthenticated={isAuthenticated}
    user={user} />
)

export default Connect(HeaderContainer)

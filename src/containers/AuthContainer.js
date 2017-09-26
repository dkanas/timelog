import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Spinner from 'components/Spinner'
import { checkAuth } from 'store/sessionModule'

export const checkIfProtectedRoute = currentPath => ![
  '/'
].find(routePath => routePath === currentPath)

@connect(
  ({ session, location }) => ({ session, location, routeIsProtected: checkIfProtectedRoute(location.pathname) }),
  { checkAuth }
)
class AuthContainer extends Component {
  componentDidMount () {
    this.props.checkAuth()
  }
  render () {
    const { children, session, location, className, routeIsProtected } = this.props

    if (session.loading) return <Spinner />
    return session.isAuthenticated || !routeIsProtected
      ? (
        <div className={className}>
          {children}
        </div>
      )
      : null
  }
}

export default AuthContainer

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Spinner from 'components/Spinner'
import { checkAuth } from 'store/sessionModule'

@connect(
  ({ session, location }) => ({ session, isIndexRoute: location.pathname === '/' }),
  { checkAuth }
)
class AuthContainer extends Component {
  componentDidMount () {
    this.props.checkAuth()
  }
  render () {
    const { children, session, className, isIndexRoute } = this.props

    if (session.authLoading) return <Spinner />
    return session.isAuthenticated || isIndexRoute
      ? (
        <div className={className}>
          {children}
        </div>
      )
      : null
  }
}

export default AuthContainer

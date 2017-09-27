import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Spinner from 'components/Spinner'
import { checkAuth } from 'store/sessionModule'

@connect(
  ({ session, location }) => ({ session, location }),
  { checkAuth }
)
class AuthContainer extends Component {
  componentDidMount () {
    this.props.checkAuth()
  }
  render () {
    const { children, session, location, className } = this.props
    console.log(session.authLoading)
    if (session.authLoading) return <Spinner />
    return session.isAuthenticated
      ? (
        <div className={className}>
          {children}
        </div>
      )
      : null
  }
}

export default AuthContainer

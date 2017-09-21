import React, { Component } from 'react'
import { connect } from 'react-redux'

import { checkAuth } from 'store/sessionModule'

@connect(
  state => ({ isAuthenticated: state.session.isAuthenticated }),
  { checkAuth }
)
class AuthContainer extends Component {
  componentDidMount () {
    this.props.checkAuth()
  }
  render () {
    const { children, isAuthenticated, className } = this.props
    return isAuthenticated
      ? (
        <div className={className}>
          {children}
        </div>
      )
      : null
  }
}

export default AuthContainer

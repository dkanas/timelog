import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import Spinner from 'components/Spinner'
import { getUserDetails } from 'store/sessionModule'

const checkIfProtected = currentPath => ![
  '/'
].find(routePath => routePath === currentPath)

@connect(
  ({ session, location }) => ({ session, location, routeIsProtected: checkIfProtected(location.pathname) }),
  { getUserDetails }
)
@withRouter
class AuthContainer extends Component {
  componentDidMount () {
    this.props.getUserDetails()
  }
  componentWillReceiveProps ({ session, location, router, routeIsProtected }) {
    console.log('here', session, location, router, routeIsProtected)
    if (!session.loading && !session.isAuthenticated && routeIsProtected) router.push('/')
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

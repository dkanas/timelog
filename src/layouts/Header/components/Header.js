import React from 'react'

import LoginButton from './LoginButton'
import UserDropdown from './UserDropdown'
import './Header.scss'

const AuthAwareComponent = props => props.isAuthenticated
  ? <UserDropdown {...props} />
  : <LoginButton />

const Header = props => (
  <header className='header__container'>
    <h1>Timelog</h1>
    <AuthAwareComponent {...props} />
  </header>
)

export default Header

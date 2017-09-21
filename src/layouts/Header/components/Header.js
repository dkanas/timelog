import React from 'react'

import LoginButton from './LoginButton'
import AvatarMenu from './AvatarMenu'
import './Header.scss'

const AuthAwareComponent = props => props.isAuthenticated
  ? <AvatarMenu {...props} />
  : <LoginButton />

const Header = props => (
  <header className='header__container'>
    <h1>Timelog</h1>
    <AuthAwareComponent {...props} />
  </header>
)

export default Header

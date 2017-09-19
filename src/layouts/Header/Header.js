import React from 'react'

import GithubLogo from './githublogo.png'
import './Header.scss'

const redirectToGithubOAuth = () => window.location.replace('/api/user/oauth')
const Header = () => (
  <header className='header__container'>
    <h1>Timelog</h1>
    <button className='header__login-btn' onClick={redirectToGithubOAuth}>
      <label className='header__login-btn__label'>Sign in</label>
      <img src={GithubLogo} className='header__login-btn__github-logo'/>
    </button>
  </header>
)

export default Header

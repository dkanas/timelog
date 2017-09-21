import React from 'react'
import GithubLogo from '../assets/githublogo.png'

const redirectToGithubOAuth = () => window.location.replace('/api/user/oauth')
const LoginButton = () => (
  <button className='header__login-btn' onClick={redirectToGithubOAuth}>
    <label className='header__login-btn__label'>Sign in</label>
    <img src={GithubLogo} className='header__login-btn__github-logo'/>
  </button>
)

export default LoginButton

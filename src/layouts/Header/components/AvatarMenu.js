import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './AvatarMenu.scss'

const silenceClick = e => {
  e.preventDefault()
  e.stopPropagation()
}
const MenuOption = ({ onClick, label }) => (
  <div
    className='avatar-menu__dropdown__item'
    onClick={onClick}>{label}</div>
)
const Menu = ({ isOpen, user, onClick }) => (
  <div
    className={'avatar-menu__dropdown__container ' + (isOpen ? 'open' : '')}>
    <MenuOption onClick={silenceClick} label={user.githubLogin} />
    <MenuOption onClick={onClick('logout')} label='Log out' />
  </div>
)

class AvatarMenu extends Component {
  state = { menuOpen: false }
  onAvatarClick = () => {
    const { menuOpen } = this.state
    this.setState({ menuOpen: !menuOpen })
  }
  onLogoutClick = () => {
    this.props.logout()
    window.location.replace('/api/user/logout')
  }
  onClick = action => () => {
    switch (action) {
      case 'logout':
        return this.onLogoutClick()
    }
  }
  render () {
    const { user = {}, logout } = this.props
    const { menuOpen } = this.state
    const triangleClassName = ['avatar-menu__triangle', menuOpen ? 'open' : ''].join(' ')
    return (
      <div className='avatar-menu__container' onClick={this.onAvatarClick}>
        <img className='avatar-menu__img' src={user.avatar} />
        <span className={triangleClassName}>&#9698;</span>
        <Menu
          isOpen={menuOpen}
          user={user}
          onClick={this.onClick} />
      </div>
    )
  }
}

export default AvatarMenu

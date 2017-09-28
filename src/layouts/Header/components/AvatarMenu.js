import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ClickOutside from 'react-click-outside'
import cn from 'classnames'
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
  <ClickOutside onClickOutside={onClick('clickOutside')}>
    <div className={cn('avatar-menu__dropdown__container ', { open: isOpen })}>
      <MenuOption onClick={silenceClick} label={user.githubLogin} />
      <MenuOption onClick={onClick('logout')} label='Log out' />
    </div>
  </ClickOutside>
)

class AvatarMenu extends Component {
  state = { menuOpen: false }
  openMenu = () => this.setState({ menuOpen: true })
  closeMenu = () => this.setState({ menuOpen: false })
  onLogoutClick = () => {
    this.props.logout()
    window.location.replace('/api/user/logout')
  }
  onClick = action => () => {
    switch (action) {
      case 'logout':
        return this.onLogoutClick()
      case 'clickOutside':
        return this.closeMenu()
    }
  }
  render () {
    const { user = {}, logout } = this.props
    const { menuOpen } = this.state

    return (
      <div className='avatar-menu__container' onClick={this.openMenu}>
        <img className='avatar-menu__img' src={user.avatar} />
        <span className={cn('avatar-menu__triangle', { open: menuOpen})}>&#9698;</span>
        <Menu
          isOpen={menuOpen}
          user={user}
          onClick={this.onClick} />
      </div>
    )
  }
}

export default AvatarMenu

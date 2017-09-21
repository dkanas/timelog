import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './AvatarMenu.scss'

class AvatarMenu extends Component {
  state = { menuOpen: false }
  onAvatarClick = () => {
    const { menuOpen } = this.state
    this.setState({ menuOpen: !menuOpen })
  }
  render () {
    const { user } = this.props
    const { menuOpen } = this.state
    const triangleClassName = ['avatar-menu__triangle', menuOpen ? 'open' : ''].join(' ')
    return (
      <div className='avatar-menu__container' onClick={this.onAvatarClick}>
        <img className='avatar-menu__img' src={user.avatar} />
        <span className={triangleClassName}>&#9698;</span>
      </div>
    )
  }
}

export default AvatarMenu

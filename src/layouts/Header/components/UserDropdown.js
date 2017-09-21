import React from 'react'
import './UserDropdown.scss'

const Avatar = ({ avatar }) => (
  <div className='user-dropdown__avatar__container'>
    <img className='user-dropdown__avatar__img' src={avatar} />
    <span className='user-dropdown__avatar__triangle'>&#9698;</span>
  </div>
)
const UserDropdown = ({ user }) => (
  <div className='user-dropdown__container'>
  <Avatar avatar={user.avatar} />
  </div>
)

export default UserDropdown

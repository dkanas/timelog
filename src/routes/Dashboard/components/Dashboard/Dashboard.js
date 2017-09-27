import React from 'react'
import cn from 'classnames'
import get from 'lodash/get'

import './Dashboard.scss'

const menuItems = [
  { label: 'Overview', path: '' },
  { label: 'Projects', path: 'projects' },
  { label: 'Entries', path: 'entries' }
]
const MenuItem = ({ active, label }) => (
  <li className={cn('dashboard__menu__item', { active })}>{label}</li>
)
const Menu = ({ activePath }) => (
  <ul className='dashboard__menu'>
    {
      menuItems.map(item => (
        <MenuItem label={item.label} active={item.path === activePath} key={item.path} />
      ))
    }
  </ul>
)

const getActivePath = pathname => pathname.split('/')[2] || ''
const Dashboard = ({ children, location }) => (
  <div className='dashboard__container'>
    <Menu activePath={getActivePath(location.pathname)} />
    <div className='dashboard__content'>
      {children}
    </div>
  </div>
)

export default Dashboard

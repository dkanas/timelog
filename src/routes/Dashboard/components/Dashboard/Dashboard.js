import React from 'react'
import cn from 'classnames'
import get from 'lodash/get'
import { Link } from 'react-router'

import './Dashboard.scss'

const menuItems = [
  { label: 'Overview', path: '' },
  { label: 'Projects', path: 'projects' },
  { label: 'Entries', path: 'entries' }
]
const MenuItem = ({ active, label, path }) => (
  <li className={'dashboard__menu__item'}>
    <Link className={cn('dashboard__menu__link', { active })} to={'/dashboard/' + path}>{label}</Link>
  </li>
)
const Menu = ({ activePath }) => (
  <ul className='dashboard__menu'>
    {
      menuItems.map(({ label, path }) => (
        <MenuItem label={label} active={path === activePath} path={path} key={path} />
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

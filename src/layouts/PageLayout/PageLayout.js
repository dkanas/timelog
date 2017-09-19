import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'

import Header from '../Header'
import './PageLayout.scss'

export const PageLayout = ({ children }) => (
  <div className='page-layout__container'>
    <Header />
    <div className='page-layout__viewport'>
      {children}
    </div>
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout

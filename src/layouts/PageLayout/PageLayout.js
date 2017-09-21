import React, { Component } from 'react'
import PropTypes from 'prop-types'

import AuthContainer from 'containers/AuthContainer'
import Header from '../Header'
import './PageLayout.scss'

const PageLayout = ({ children }) => (
  <div className='page-layout__container'>
    <Header />
    <AuthContainer className='page-layout__viewport'>
      {children}
    </AuthContainer>
  </div>
)

PageLayout.propTypes = {
  children: PropTypes.node
}

export default PageLayout

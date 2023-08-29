import React from 'react'
import Header from '../shared/header'
import Sidebar from '../shared/sidebar'
import Footer from '../shared/footer'

const Layout = ({children}) => {
  return (
      <>
          <Header />
          <Sidebar />
          {children}
          <Footer/>
      </>
  )
}

export default Layout
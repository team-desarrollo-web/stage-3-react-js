import React from 'react';

import Footer from '../shared/footer';
import Header from '../shared/header';
import Sidebar from '../shared/sidebar';

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Sidebar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;

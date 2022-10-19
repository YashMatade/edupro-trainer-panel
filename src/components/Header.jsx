import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import MBreadcrumbs from './Breadcrum';
import Cards from './Cards';

const Header = () => {
  return (
    <div>
      <Navbar/>
      <MBreadcrumbs/>
      <Cards/>

    </div>
  )
}

export default Header;

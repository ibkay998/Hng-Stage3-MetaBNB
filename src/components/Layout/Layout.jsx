import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

function Layout(props) {
  return (
    <div className='w-full flex flex-col items-center'>
      <Navbar/>
      {props.children}
      <Footer/>
    </div>
  );
}

export default Layout;

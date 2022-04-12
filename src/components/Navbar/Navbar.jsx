import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.scss'
function Navbar() {
  return (
    <div className="header">
    <div className="logo">FENTY BEAUTY.</div>

    <div className='menu'>
          <Link to='/about'>MAKEUP</Link>
          <Link to='/hero'>SKINCARE</Link>
          <Link to='/story'>ABOUT US</Link>
          <Link to='/login'>LOGIN </Link>

        </div>
   
  </div>
  )
}

export default Navbar

import React from 'react'
import  "../images/brand_logo.png"
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="container">
      <div className="logo">
      <img src="https://i.ibb.co/YZdZRNp/brand-logo.png" alt="brand-logo" border="0" />
      </div>
      <ul>
        <li href="#">Menu</li>
        <li href="#">Location</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>

      <button>Login</button>
    </nav>
  )
}

export default Navbar;
import React from 'react'
import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <>
      <header className="navHeader">

    <Link>
    <img src="#" alt="logo" /> 
    </Link>
    <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/services">Service</Link>
    </nav>

       <nav>
       <Link to="/login">Login</Link>
       <Link to="/register">Register</Link>
       </nav>


      </header>
    </>
  )
}

export default Navbar

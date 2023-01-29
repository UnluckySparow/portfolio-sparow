import React from 'react'
import '../styles/Navbar.css'
import mouadimg from "../assets/images/mouadimg.jpeg"
import { Link } from 'react-router-dom'
export default function Navbar() {
  const adminapp = 'mouad'
  return (
    <div className='section_header'>
      <nav className='containernav'>
        <div className='img_perso'>
            <img src={mouadimg}  alt=""/>
            <h3>{adminapp}</h3>
        </div>
        <div className='menu'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          
        </div>
      </nav>
    </div>
  )
}
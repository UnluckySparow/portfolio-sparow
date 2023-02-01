import React from 'react'
import '../styles/Navbar.css'
import mouadimg from "../assets/images/mouadimg.jpeg"
import { Link } from 'react-router-dom'
export default function Navbar() {
  const adminapp = 'mouad';
  const curentyear = new Date().getFullYear();
  return (
    <div className='section_header'>
      <nav className='containernav'>
        <div className='img_perso'>
            <img src={mouadimg}  alt=""/>
        </div>
        <div className='menu'>
          <ul className="listmenu">
            <li className='active'><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className='copyright_div'>
          © {curentyear} {adminapp}
        </div>
      </nav>
    </div>
  )
}
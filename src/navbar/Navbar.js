import React from 'react'
import '../styles/Navbar.css'
import mouadimg from "../assets/images/mouadimg.jpeg"
import { Link } from 'react-router-dom';

export default function Navbar() {
  const adminapp = 'mouad';
  const curentyear = new Date().getFullYear();
  const buttonClickHandler = (e) => {
    document.querySelectorAll('.listmenu li').forEach(i => {i.classList.remove('active')})
    e.currentTarget.classList.add('active');
};
  return (
    <div className='section_header'>
      <nav className='containernav'>
        <div className='img_perso'>
            <img src={mouadimg}  alt=""/>
        </div>
        <div className='menu'>
          <ul className="listmenu">
            <li Link onClick={buttonClickHandler} className='active'><Link to="/">Home</Link></li>
            <li Link onClick={buttonClickHandler} ><Link to="/about-me">About</Link></li>
            <li Link onClick={buttonClickHandler} ><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className='copyright_div'>
          © {curentyear} <span className='name_cpy'>{adminapp}</span>
        </div>
      </nav>
    </div>
  )
}
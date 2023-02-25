import React from 'react'
import '../styles/Navbar.css'
import mouadimg from "../assets/images/my-img.jfif"
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
 
  const curentyear = new Date().getFullYear();
  const buttonClickHandler = (e) => {
    document.querySelectorAll('.listmenu li').forEach(i => {i.classList.remove('active')})
    if(window.matchMedia("max-width:800px")){
      document.querySelector('.section_header').classList.remove('showheader');
    document.querySelector('.burger-menu').classList.remove('headbut');
    }
    e.currentTarget.classList.add('active');

};
const headmobileheader = () =>{
  document.querySelector('.section_header').classList.remove('showheader');
  document.querySelector('.burger-menu').classList.remove('headbut');
}

return (
    <div className='section_header'>
      <span className='cursormove'></span>
      <button onClick={headmobileheader} className="head_header"><FontAwesomeIcon icon={faXmark}/></button>
      <nav className='containernav'>
        <div className='img_perso'>
            <img src={mouadimg}  alt=""/>
        </div>
        <div className='menu'>
          <ul className="listmenu">
            <li Link onClick={buttonClickHandler} ><Link to="/">Home</Link></li>
            <li Link onClick={buttonClickHandler} ><Link to="/about-me">About - me</Link></li>
            <li Link onClick={buttonClickHandler} ><Link to="/contact">Contact - me</Link></li>
            <li Link onClick={buttonClickHandler} ><Link to="/my-skills">My - Skills</Link></li>
            {/* <li Link onClick={buttonClickHandler} ><Link to="/play-snake">Snake</Link></li> */}
          </ul>
        </div>
        <div className='copyright_div'>
          © {curentyear} <span className='name_cpy'>Aithmidine Mouad</span>
        </div>
      </nav>
    </div>
  )
}
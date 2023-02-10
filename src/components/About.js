import React from 'react'
import CV from '../assets/files/my-cv.pdf'

import secondimg from "../assets/images/me.jpeg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlassPlus, faXmark } from '@fortawesome/free-solid-svg-icons'
export default function About() {
  const modalOpen = () => { 
    document.querySelector('.modal_img').classList.add('showmodal');
  }
  const modalClose = () => { 
    document.querySelector('.modal_img').classList.remove('showmodal');
  }
  return (
  
    <div className='pagecurrent col-md-9'>
      <div className='modal_img'>
            <button onClick={modalClose} className="close_modal"><FontAwesomeIcon icon={faXmark}/></button>
            <div className='modal-div'>
              <img src={secondimg}  alt="" className='myimg-modal'/>
            </div>
          </div>
      <div className='about-me content'>        
        <h2 className='title_aboutme'><span className='title'>About-me</span></h2>
        <div className='info-about-me'>
          <div className='img_forme'>
              <img src={secondimg}  alt="" className='myimg-aboutme'/>
              <button className='zoom' onClick={modalOpen}><FontAwesomeIcon icon={faMagnifyingGlassPlus}/></button>
              
          </div>
          
          <div className='info'>
            <h3 className='h3_info'>I'm <span className='firstcolor'>Mouad Aithmidine</span></h3>
            <p className='content_info'>
            I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.
            </p>
            <table className='list_infos'>
                <tr><td><strong className='firstcolor'>Age : </strong></td><td>24 years</td></tr>
              <tr>
              <td> <strong className='firstcolor'>Nationality : </strong></td><td>Morrocan</td>
              </tr>
              <tr>
              <td> <strong className='firstcolor'>City : </strong> </td><td>Casablanca</td>
             </tr>
            </table>
            <a href={CV} rel="noreferrer" target={"_blank"}>
            <button  className='btn-cv'>View cv</button>
            </a>
          </div>
        </div>
      </div>

    </div>
  )
}
 
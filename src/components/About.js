import React from 'react'
// import infosperso from '../infos/About-me';
export default function About() {
  
  return (
  
    <div className='pagecurrent col-md-9'>
      <div className='about-me content'>        
        <h2 className='title_aboutme'><span className='title'>About-me</span></h2>
        <div className='info-about-me'>
          <div className='img_forme'>
            {/* <img className='imag_info'>
            <source src=""/>
            </img> */}
            <h2> Image </h2>
          </div>
          <div className='info'>
            <h3 className='h3_info'>I'm <span className='firstcolor'>Mouad Aithmidine</span></h3>
            <p className='content_info'>
            I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.
            </p>
            <ul className='list_infos'>
              <li>
                <strong className='firstcolor'>Age : </strong>24 years
              </li>
              <li>
                <strong className='firstcolor'>Nationality : </strong>Morrocan
              </li>
              <li>
                <strong className='firstcolor'>City : </strong>Casablanca
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  )
}

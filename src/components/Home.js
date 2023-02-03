import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faGithub,faTwitter,faLinkedin} from '@fortawesome/free-brands-svg-icons'


export default function Home() {
  return (
    <div className='pagecurrent col-md-9 home-page'>
        <div className='section_content'>
        <h1 className='h1_pres'>
            Hi, i'm <span className='firstcolor'>Mouad Aithmidine</span> 
        </h1>

        <p>
        I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.
        </p>
        <ul className='listres'>
            <li><Link to={"https://github.com/UnluckySparow"} target={"_blank"}><FontAwesomeIcon icon={faGithub} /></Link></li>
            <li><Link to={"https://twitter.com/MouadAithmidine"} target={"_blank"}><FontAwesomeIcon icon={faTwitter} /></Link></li>
            <li><Link to={"https://www.linkedin.com/in/mouad-aithmidine-5b692b167/"} target={"_blank"}><FontAwesomeIcon icon={faLinkedin} /></Link></li>
            
        </ul>
        </div>
    </div> 
  )
}

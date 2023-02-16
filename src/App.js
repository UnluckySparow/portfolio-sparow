
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  const buttonClickHandler = () => {
    document.querySelector('.section_header').classList.add('showheader')
    document.querySelector('.burger-menu').classList.add('headbut');
  };
let location = useLocation();
useEffect(()=>{
  if(location.pathname === "/portfolio-sparow/"  ){
    window.location.href="/";
  }
})
  return (
    <div className="burger-menu">
      <button className='buttonburger' onClick={buttonClickHandler}><FontAwesomeIcon icon={faBars}/></button>
    </div>
  );
}

export default App;

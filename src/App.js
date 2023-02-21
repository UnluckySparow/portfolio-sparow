
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import { useEffect } from 'react';

function App() {
  const buttonClickHandler = () => {
    document.querySelector('.section_header').classList.add('showheader')
    document.querySelector('.burger-menu').classList.add('headbut');
  };
const { innerWidth: width } = window;
let enterport =  0 ; 
let doctype = document.title;
useEffect(()=>{
  if(enterport === 0 ){
    if(width <= 800){
      document.querySelector(".section_header").classList.add("showheader");
      document.querySelector('.burger-menu').classList.add('headbut');
    }
    enterport++;
  }
  setTimeout(() => {
    window.addEventListener("blur" , () =>{
      document.title = "Come back ! "
    })
    window.addEventListener("focus" , () =>{
      document.title = doctype
    })
   }, 1000);
})


  return (
    <div className="burger-menu">
      <button className='buttonburger' onClick={buttonClickHandler}><FontAwesomeIcon icon={faBars}/></button>
    </div>
  );
}

export default App;

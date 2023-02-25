import React, { useState } from 'react'
 
export default function Cursor() {
    const [moX , setmoX] = useState();
    const [moY , setmoY] = useState();
const Changeval = (e) => {
    setmoX(e.clientX);
    setmoY(e.clientY);
   document.querySelector('.spanmove').style=`left:${moX}px;top:${moY}px`;
   
    }
 window.addEventListener('mousemove', Changeval);
  return (
    <div className='spanmove'></div>
  )
}

import React, { useEffect } from 'react'

 function Snake() {

    useEffect(() => {
        document.addEventListener("keydown", this.onKeyPressed.bind(this));
        return () => {
            document.removeEventListener("keydown", this.onKeyPressed.bind(this));
        }
    })  
    
  return (
    
    <div className='container_snake'>
        <div className='espace_playing'>
            <span onChange={HandleMove} className='snnake'></span>    
        </div>
    </div>
  )
    
}
export default  Snake();
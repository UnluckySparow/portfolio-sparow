import React, { useEffect } from 'react'
import img from "../assets/images/me.jpeg";
export default function Show_blogs() {
    const blogs= [
      {title:'Welcome to site', content : `Welcome to my portofolio <br>apaadsadaasdaaah`,image:`${img}`},
      {title:'Welcome to site2', content : 'Welcome to my portofolio 2apaaaah',image:`${img}`},
      {title:'Welcome to site2', content : 'Welcome to my portofolio 3apaaaah',image:`${img}`}
    ]
    // function limit (string = '', limit = 0) {  
    //   return string.substring(0, limit) + '...';
    // }
    // let content_blog = document.getElementsByClassName('.content_blog')
    const goToblog = () =>{
        Response.redirect('/')
    }
useEffect(()=>{
  
})
  return (
    <div className='pagecurrent col-md-9'>
        <div className='container_blogs'>
        <ul>
          {blogs.map((blog)=>(
            <li>
              <div className='div_blog'>
                <img src={blog.image} alt=''  className='imgmg'/>
                <h3>{blog.title}</h3>
                <p className='content_blog'>{blog.content}</p>
                <button onClick={goToblog()} className='btn-cv'>Lire plus</button>
              </div>
            </li>
          ))}
        </ul>
        </div>
    </div>
  )
}

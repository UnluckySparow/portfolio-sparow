import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [username , setUsername]=useState();
  const [mail , setMail]=useState('');
  const [subject , setSubject]=useState('');
  const [message , setMessage]=useState('');
  const [suc_inv,setSuc_inv]=useState('');
  const sendEmail = (e) => {
    e.preventDefault();
    if(username && mail && subject && message){
      const rgep = /^[a-zA-Z0-9._]+@[a-z]+\.[a-z]{2,6}$/;
      if(rgep.test(mail)){
        emailjs.sendForm('service_kw3evb5', 'template_s8pqd0b', form.current, 'gUiU8KbGqqlBhQswJ')
        .then(() => {
          setUsername('');
          setMail('');
          setSubject('');
          setMessage('');
          setSuc_inv('Thank-you for your mail');
          document.querySelector('.contact-done').classList.remove('inv');
          document.querySelector('.contact-done').classList.add('succ');
        })
      }

      if(!rgep.test(mail)){
        document.querySelector('.contact-done').classList.add('inv');
        document.querySelector('.contact-done').classList.remove('succ');
        setMail('');
        setSuc_inv('please try again, Email is not valid');
      }
    
  }

  else{
    setSuc_inv('Please, you need to insert all option');
    document.querySelector('.contact-done').classList.remove('succ')
    document.querySelector('.contact-done').classList.add('inv')
  }
}
  return (
    <div className='pagecurrent col-md-9'>
      <div className='page-contact content'>
        <h2 className='title_contactme'><span className='title'>Contact-me</span></h2>
        <div className='div_form'>
          <form ref={form} onSubmit={sendEmail}>
            <div>
              <label>Enter your name</label>
              <input autoComplete='off' type="text" name="user_name" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
              <label>Enter your mail</label>
              <input autoComplete='off' type="email" name="user_email" value={mail} onChange={(e) => setMail(e.target.value)}/>
            </div>
            <div>
              <label>Enter your subject</label>
              <input autoComplete='off' type="text" name="subject" value={subject} onChange={(e) => setSubject(e.target.value)}/>
            </div>
            <div> 
              <label>Enter your message</label>
              <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)}/>
            </div>
            <div> 
              <input type="submit" className='btn-submit' value="Send" />
            </div>
          </form>
        </div>
        <div className='contact-done'>
             {suc_inv}
        </div>  
      </div>
    </div>
  )
}


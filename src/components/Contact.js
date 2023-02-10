import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kw3evb5', 'template_s8pqd0b', form.current, 'gUiU8KbGqqlBhQswJ')
      .then((result) => {
          alert(result.text)
      }, (error) => {
        alert(error.text);
      });
  };
  return (
    <div className='pagecurrent col-md-9'>
      <div className='page-contact content'>
        <h2 className='title_contactme'><span className='title'>Contact-me</span></h2>
        <div className='div_form'>
          <form ref={form} onSubmit={sendEmail}>
            <div>
              <label>Enter your name</label>
              <input type="text" name="user_name" />
            </div>
            <div>
              <label>Enter your mail</label>
              <input type="email" name="user_email" />
            </div>
            <div>
              <label>Enter your subject</label>
              <input type="text" name="subject" />
            </div>
            <div> 
              <label>Enter your message</label>
              <textarea name="message" />
            </div>
            <div> 
              <input type="submit" className='btn-submit' value="Send" />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}


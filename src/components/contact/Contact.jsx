import { React, useRef } from 'react'
import emailjs from '@emailjs/browser'
import './contact.css'
import swal from 'sweetalert'

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('ID', 'TEMPALTE', form.current, 'USER')
      .then((result) => {
        swal('Dziękuje za wiadomość', 'Wiadomość została wysłana poprawnie', 'success')
        console.log(result.text);
      }, (error => {
        swal('Coś poszło nie tak', 'Spróbuj ponownie później', 'error')
        console.log(error.text)
      }))
  };

  return (
    <div class='section-wrap'>
      <section>
        <h2>Kontakt do nas</h2>
        
        <div className='contact-info'>
          <ul>
            <li><a href="tel: +48 555 555 555">+48 555 555 555</a></li>
            <li><a href="mailto: kontakt@groomer.pl">kontakt@groomer.pl</a></li>
            <li>ul. Pleszewska 1</li>
            <li>61-139, Poznań</li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Umów się</h2>

        <div className='form-template'>
          <form ref={form} onSubmit={sendEmail}>
            <input type='text' name='name' placeholder='Imię i nazwisko' required/>
            <input type='email' name='name' placeholder='Email' required />
            <textarea  name='message' placeholder='Wiadomość' required />
            <button className='btn primary' type='submit'>Wyślij</button>
          </form>
        </div>
      </section>

      <section>
       <h2>Zajrzyj do nas</h2>

       <div className='map-location'>
        <iframe 
          width="520" 
          height="400" 
          frameborder="0" 
          marginheight="0" 
          marginwidth="0" 
          id="gmap_canvas" 
          src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Pleszewska%201%20Pozna%C5%84+(Groomer)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" 
          />
       </div>
      </section>
    </div>
  )
}

export default Contact
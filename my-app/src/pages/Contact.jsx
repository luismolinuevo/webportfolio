import React from 'react'
import emailjs from 'emailjs-com';
import "../styles/Contactme.css"

const Contact = () => {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ifz1oqo', 'template_wm5gmpk', e.target, '2e4j5otUuU83ooFW_')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  return (
    <section id="contact-me">
        <div className = "container">
          <h1 className = "heading">Contact Me</h1>
          <form onSubmit={sendEmail}>
              {/* <label>Name</label> */}
              <input className = 'input' placeholder = "Enter Name" type="text" name="name" />
              {/* <label>Name</label> */}
              <input className = 'input' placeholder = "Enter Subject" type="text" name="subject" />
              {/* <label>Subject</label> */}
              <input className = 'input' placeholder = "Enter Email" type="email" name="email" />
              {/* <label>Message</label> */}
              <textarea className = "mesg" type="text" placeholder = "Enter Message" name="message" />
              <input type="submit"  className = "submit" placeholder = "Enter Message" value="Send" />
           </form>

        </div>
    </section>
  )
}

export default Contact
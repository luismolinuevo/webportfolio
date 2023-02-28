import {useState} from 'react'
import emailjs from 'emailjs-com';
import "../styles/Contactme.css"
import {FaLinkedin, FaGithub, FaYoutube} from "react-icons/fa"
import Alert from '@mui/material/Alert';


const Contact = () => {

  const [isError, setIsError] = useState(false);
  const [isGood, setIsGood] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsGood(false);
    setIsError(false)
    
    try {
      emailjs.sendForm('service_ifz1oqo', 'template_wm5gmpk', e.target, '2e4j5otUuU83ooFW_')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
      setIsGood(true)
    } catch {
      setIsError(true)
    }

    
  };

  return (
    <section id="contact-me">
        <div className = "container">

          <div>
            <h1 className = "heading">Contact Me</h1>
            <h3 className='email'>luismolinuevo0@gmail.com</h3>
            <div className='socialContain'>
              <ul>
                <a href="https://www.linkedin.com/in/luismolinuevo/" target="blank_"><li><FaLinkedin className='contactIcons'/></li></a>
                <a href="https://github.com/" target="blank_"><li><FaGithub className='contactIcons'/></li></a>
                <a href="https://www.youtube.com/channel/UCRc-HqHUwj3obUnh4--flGQ" target="blank_"><li><FaYoutube className='contactIcons'/></li> </a>
              </ul>
            </div>

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

            {
              isGood ? <div className='center'><Alert serverity="success" variant='outlined'>Email Sent!!!!</Alert></div> : ""
            } 
            {
              isError ? <div className='center'><Alert serverity="error" variant='outlined'>"Error"</Alert></div> : ""
            }
            
            

      
          </div>
        </div>
    </section>
  )
}

export default Contact
//finsh footer and add some final touches needed
//make contact me page responsive
//make things look good and clean
//host
//change icons for skills and proof read

import React from 'react'
import {FaLinkedin, FaGithub, FaYoutube, FaDownload} from "react-icons/fa"
import "../styles/Footer.css"
import Resume from "../assets/LMResume.pdf"
// import {FaBars, FaTimes} from "react-icons/fa";


const Footer = () => {
  return (
    <footer id="footer">
        <div className = "container">
            <div className = "foot">
                <ul>
                    <a href="https://www.linkedin.com/in/luismolinuevo/" target="blank_"><li><FaLinkedin/></li></a>
                    <a href="https://github.com/" target="blank_"><li><FaGithub/></li></a>
                    <a href="https://www.youtube.com/channel/UCRc-HqHUwj3obUnh4--flGQ" target="blank_"><li><FaYoutube/></li> </a>
                </ul>
                <a href={Resume} download><FaDownload className="download" />Resume</a>
            </div>
        </div>
    </footer>
  )
}

export default Footer
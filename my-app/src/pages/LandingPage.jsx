import React from 'react'
import "../styles/Landingpage.css"
import {FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa"

const LandingPage = () => {
  return (
    <React.Fragment>
        <section id = "home">
            <div className = "container">
              <div className = "hero">
                <div className ="home-info">
                  <p className = "hey">Hello!</p>
                  <h1>I'm Luis</h1>
                  <h1><span className = "accent">Moli</span>nuevo</h1>
                  <p className = "intro">A FullStack Webdeveloper</p>
                  <div className='homeBottom'>
                    <a className="contact-button" href="#contact-me">Hire Me</a>
                  </div>
                  
                </div>
              </div>


            </div>
        </section>
    </React.Fragment>
  )
}

export default LandingPage


//Make responsive. Lower container padding on mobile.

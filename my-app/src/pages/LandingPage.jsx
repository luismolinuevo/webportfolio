import React from 'react'
import "../styles/Landingpage.css"
import {FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa"
import { Slide } from "react-awesome-reveal";

const LandingPage = () => {
  return (
    <React.Fragment>
        <section id = "home">
            <div className = "container">
              <Slide direction={"up"} triggerOnce={"false"}>
                <div className = "hero">  
                  <div className ="home-info">
                    <p className = "hey">Hello!</p>
                    <h1>I'm Luis</h1>
                    <h1><span className = "accent">Moli</span>nuevo</h1>
                    <p className = "intro">A FullStack Web Developer</p>
                    <div className='homeBottom'>
                      <a className="contact-button" href="#contact-me">Hire Me</a>
                      <a className="viewwork" href='#projects'>My Work</a>
                    </div>
                  </div>
                </div>
              </Slide>
            </div>
        </section>
    </React.Fragment>
  )
}

export default LandingPage


//Make responsive. Lower container padding on mobile.

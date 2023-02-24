import React from 'react'
import "../styles/skills.css"
import {FaReact, FaBootstrap, FaGitSquare} from "react-icons/fa";
import {DiJava, DiJavascript1, DiCss3, DiHtml5, DiPython } from "react-icons/di"
import { Slide } from "react-awesome-reveal";



const Skills = () => {
  return (
    <section id="skills">
      <div className='container'>
        <h1 className="heading">Skills</h1>
        <div className = "skills-main">
          <Slide damping={0.1} direction={"left"}>
            <div className="about">
              <p className = "accent">Hello!</p>
              <p>My name is Luis Molinuevo a Web Developer. 
                Im currently a Computer Science senior at Lehman College. 
                Im also in The Knowledge House Innovation and Cuny Tech Prep Fellowships.
                I use modern technologies like React to build fully responsive full stack applications.
                I also love to upscale my skills and problem solve.</p>
            </div>
          </Slide>
          <Slide damping={0.2} direction={"left"}>
            <div className = "skills">
              {/* <img className = "test" src={hey}/> */}
              
              <div className = "skill">
                <FaReact/>
                <p>React.js</p>
              </div>
              <div className = "skill">
                <DiJava/>
                <p>Java</p>
              </div>
              <div className = "skill">
                <DiJavascript1/>
                <p>JS</p>
              </div>
              <div className = "skill">
                <DiHtml5/>
                <p>HTML</p>
              </div>
              <div className = "skill">
                <DiCss3/>
                <p>CSS</p>
              </div>
              <div className = "skill">
                <DiPython/>
                <p>Python</p>
              </div>
              <div className = "skill">
                <FaBootstrap/>
                <p>Bootstrap</p>
              </div>
              <div className = "skill">
                <FaGitSquare/>
                <p>Git</p>
              </div>
            </div>
          </Slide>
          
        </div>
      </div>
    </section>
  )
}

export default Skills

//rename in navbar to about or the opposite
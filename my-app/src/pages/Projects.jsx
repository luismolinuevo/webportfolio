import React from 'react'
import "../styles/Projects.css"
import JournalGif from "../assets/JournalGif.gif"
import WorkoutApp from "../assets/WorkoutGif.gif"
import WeatherApp from "../assets/weatherapppic.png"
import { JackInTheBox, Slide } from 'react-awesome-reveal'

const Projects = () => {
  return (
    <section id="projects">
        {/* <div className="container"> */}
            <h1 className='heading'>Projects</h1>
            <div className= "projects">
            {/* <Slide triggerOnce="true" direction='right'> */}
            <div className = "project-element">
                    <div><img className="project-pics" src = {WorkoutApp}/></div>
                    <div>
                        <h3>Fitszy</h3>
                        <p className = "project-info">This app allows users to create a personal account, custom workouts, and custom exercises for specific workouts.
                        It saves user information and allows users to delete, create, add, and edit their workouts and exercises.
                        
                        </p>
                        <div>
                            <p className="tech-stack">JS, React, Express, Node, Postgresql</p>
                        </div>
                    </div>
                    <div className = "links">
                        {/* <a className = "project-links" href='https://luismolinuevo.github.io/workouttracker/'  target="_blank" rel="noopener noreferrer">Live</a> */}
                        <a className = "project-links" id="code" href='https://github.com/luismolinuevo/workoutappv2'  target="_blank" rel="noopener noreferrer">Code</a>
                    </div>
                </div>
                <div className = "project-element">
                    <div><img className="project-pics" src = {WeatherApp}/></div>
                    <div>
                        <h3>Weather App</h3>
                        <p className = "project-info">This app was created with React.js and CSS. 
                        It uses state hooks to get a city name.
                        And then fetches from a public api to get the weather for
                        that city. It then displays the temp, wind speed, and humidity for that city.
                        </p>
                        <div>
                           <p className="tech-stack">React.js, JS, CSS</p>
                        </div>
                    </div>
                    <div className = "links">
                        <a className = "project-links" id="code" href='https://github.com/luismolinuevo/weatherapp'  target="_blank" rel="noopener noreferrer">Code</a>
                    </div>
                </div>

                <div className = "project-element">
                    <div><img className="project-pics" src={JournalGif}/></div>
                    <div>
                        <h3>Journal App</h3>
                        <p className = "project-info">This app was created with React.js and CSS. 
                        It uses state hooks to get a zip code.
                        And then fetches from a public api to find all of the citys
                        associated with that zipcode.Hosted on heroku(may take long to load)
                        </p>
                        <div>
                            <p className="tech-stack">React.js, JS, CSS</p>
                        </div>
                        <div className = "links">
                            <a className = "project-links" href='https://luismcityfinder.herokuapp.com/'  target="_blank" rel="noopener noreferrer">Live</a>
                            <a className = "project-links" id="code" href="https://github.com/luismolinuevo/workouttracker"  target="_blank" rel="noopener noreferrer">Code</a>
                        </div>
                    </div>
                </div>
                {/* </Slide> */}
            </div>
        {/* </div> */}
    </section>
  )
}

export default Projects

//try and change opacity on nav bar elments
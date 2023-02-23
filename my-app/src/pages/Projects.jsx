import React from 'react'
import "../styles/Projects.css"
import CityPic from "../assets/CitySearcherApp.png"
import WorkoutApp from "../assets/Workout App.jpg"
import WeatherApp from "../assets/weatherapppic.png"

const Projects = () => {
  return (
    <section id="projects">
        {/* <div className="container"> */}
            <h1 className='heading'>Projects</h1>
            <div className= "projects">
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
                           <p className="tech-stack">Tech Stack: React.js, JS, CSS</p>
                        </div>
                    </div>
                    <div className = "links">
                        <a className = "project-links" href='https://github.com/luismolinuevo/weatherapp'  target="_blank" rel="noopener noreferrer">Code</a>
                    </div>
                </div>

                <div className = "project-element">
                    <div><img className="project-pics" src={CityPic}/></div>
                    <div>
                        <h3>City Searcher</h3>
                        <p className = "project-info">This app was created with React.js and CSS. 
                        It uses state hooks to get a zip code.
                        And then fetches from a public api to find all of the citys
                        associated with that zipcode.Hosted on heroku(may take long to load)
                        </p>
                        <div>
                            <p className="tech-stack">Tech Stack: React.js, JS, CSS</p>
                        </div>
                        <div className = "links">
                            <a className = "project-links" href='https://luismcityfinder.herokuapp.com/'  target="_blank" rel="noopener noreferrer">Live</a>
                            <a className = "project-links" href="https://github.com/luismolinuevo/workouttracker"  target="_blank" rel="noopener noreferrer">Code</a>
                        </div>
                    </div>
                </div>

                <div className = "project-element">
                    <div><img className="project-pics" src = {WorkoutApp}/></div>
                    <div>
                        <h3>Workout App</h3>
                        <p className = "project-info">This app was created with Java Script, Local Storage, HTML, and CSS.
                        This app allows users to track workout name, rep amount, personal record amount, and more. It then saves that workout using local storage.
                        
                        </p>
                        <div>
                            <p className="tech-stack">Tech Stack: JS, CSS, HTML</p>
                        </div>
                    </div>
                    <div className = "links">
                        <a className = "project-links" href='https://luismolinuevo.github.io/workouttracker/'  target="_blank" rel="noopener noreferrer">Live</a>
                        <a className = "project-links" href='https://github.com/luismolinuevo/workouttracker'  target="_blank" rel="noopener noreferrer">Code</a>
                    </div>
                </div>
            </div>
        {/* </div> */}
    </section>
  )
}

export default Projects

//try and change opacity on nav bar elments
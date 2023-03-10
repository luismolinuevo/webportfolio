import React from 'react';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import LandingPage from './pages/LandingPage';
import Projects from './pages/Projects';
import Skills from "./pages/Skills"
import Footer from "./components/Footer"

import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './redux/themeSlice.js';

import "./App.css"

function App() {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  return (
    <React.Fragment>
      <div className={isDarkMode ? "darkmode" : ""}> {/*This is how you  could put the background(nav, landingpage) */}
        <Navbar/>
        <LandingPage/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    </React.Fragment>
      
    

  );
}

export default App;
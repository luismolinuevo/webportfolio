import React from 'react';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import LandingPage from './pages/LandingPage';
import Projects from './pages/Projects';
import Skills from "./pages/Skills"
import Footer from "./components/Footer"


function App() {
  return (
    <React.Fragment>
      <div> {/*This is how you  could put the background(nav, landingpage) */}

      </div>
      <Navbar/>
      <LandingPage/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </React.Fragment>
      
    

  );
}

export default App;
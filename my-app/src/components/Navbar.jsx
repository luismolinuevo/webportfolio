import {useState, useEffect} from 'react'   //rafce is the short cut
import {FaBars, FaTimes} from "react-icons/fa";
import "../styles/Navstyles.css"
import Resume from "../assets/LM Resume.pdf"



const Navbar = () => {
    const [expandNavbar, setExpandNavbar] = useState(false);
    const [navbar, setNavbar] = useState(false);

    const handleClick = () => setExpandNavbar(!expandNavbar)   //sets expandnavbar to opposite value


    const changeBackground = () => {
        if(window.scrollY >= 90) {
            setNavbar(true)
        } 
        else {
            setNavbar(false)
        }
    }

    useEffect(() => {
        setExpandNavbar(false);
        window.addEventListener("scroll", changeBackground)
    }, []);

    

    return (
        
            <header className = {navbar ? "active" : " "}>
                <div className = "container">
                    <div className = "navbar">
                        <h1 className = "logo">Moli<span className ="accent">nuevo</span></h1>
                        <nav className={expandNavbar ? "responsive_nav" : " "}>
                            <a href='#home' onClick={handleClick}>Home</a>
                            <a href='#skills' onClick={handleClick}>Skills</a>
                            <a href='/#projects' onClick={handleClick}>Projects</a>
                            <a href='#contact-me'  onClick={handleClick}>Contact Me</a>
                            <a href={Resume} download className ="contact-button" onClick={handleClick}>Resume</a>
                            
                            <button className="nav-btn nav-close-btn" onClick={() => {
                                setExpandNavbar((prev) => !prev);
                             }}> 
                            
                                <FaTimes/>
                            </button>  
                        </nav>
                    </div>
                
                    <button className="nav-btn" onClick={() => {
                        setExpandNavbar((prev) => !prev);
                    }}>
                        <FaBars/>
                    </button>
                </div>
            </header>
        

    )
}

export default Navbar



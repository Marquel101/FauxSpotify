import "./Navbar.css"
import React from 'react'
import { Link } from "react-router-dom";
import logo from "./spotify.jpg"
import { useState } from "react";

export default function Navbar() {

  const [toggler, setToggler] = useState(true)
  const [check,setCheck] = useState(false)

  const hamburger = document.querySelector(".hamburger")
  const width = window.innerWidth
  
  const toggleCheck = () => {
     if (width > 991) {
        
        setCheck(true)
     } else if (width < 992) {
       setCheck(false)
       setToggler(false)
     }
  }
  window.addEventListener('resize', toggleCheck)
 
  const toggle = () => {
    toggler ? setToggler(false) : setToggler(true)
  }

  return (
    <div className="banner">
    <div className="navbar">
      <div className="brand">
       <img className='logo' src={logo}/>
      </div>
        <ul className={toggler || check  ? "navlinks" : "navlinksactive"}>
            <div className="links">
              <li className="link">Premium</li>
              <li className="link">Support</li>
              <li className="link">Download</li>
            </div>
            <li className={toggler || check ? "line" : "lineactive"}></li>
            <div className="auth">
              <li className="link">Sign up</li>
              <li className="link">Log in</li>
            </div>
        </ul>
      
        <div className={toggler || check ? "hamburger" : "hamburgeractive"} onClick={toggle}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
    </div>
    </div>
    </div>
  );
}

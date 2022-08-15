import "./Navbar.css"
import React from 'react'
import { useState } from "react";

export default function Navbar() {

  const [toggler, setToggler] = useState(true)
  
  const toggle = () => {
    toggler ? setToggler(false) : setToggler(true)
  }
  if (document.getElementsByClassName("navlinksactive")) {
    window.scrollTo(0,0)
  }
  return (
    <div className="banner">
    <div className="navbar">
      <div className="brand">
       <img alt="Spotify" className='logo' src="https://i.imgur.com/8o2sR7p.jpg"/>
      </div>
        <ul className={toggler  ? "navlinks" : "navlinksactive"}>
            <div className="links">
              <li className="link">Premium</li>
              <li className="link">Support</li>
              <li className="link">Download</li>
            </div>
            <li className="line"></li>
            <div className="auth">
              <li className="link">Sign up</li>
              <li className="link">Log in</li>
            </div>
        </ul>
      
        <div className={toggler  ? "hamburger" : "hamburgeractive"} onClick={toggle}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
    </div>
    </div>
    </div>
  );
}

import "./Navbar.css"
import React from 'react'
import { Link } from "react-router-dom";
import logo from "./spotify.jpg"

export default function Navbar() {
  return (
    <div className="banner">
    <div className="navbar">
      <div className="brand">
       <img className='logo' src={logo}/>
      </div>
        <ul className="navlinks">
            <li className="link">Premium</li>
            <li className="link">Support</li>
            <li className="link">Download</li>
            <li className="line"></li>
            <li className="auth">Sign up</li>
            <li className="auth">Log in</li>
        </ul>
      
        <div className="hamburger">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
    </div>
    </div>
    </div>
  );
}

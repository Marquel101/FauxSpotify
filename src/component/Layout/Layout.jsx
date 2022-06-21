import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import React from "react";

export default function Layout(props) {
    return (
        <div className="layout">
           <Navbar />
           {props.children}
           <Footer /> 
        </div>
    )
};


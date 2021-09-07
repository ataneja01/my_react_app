import React from "react";
import "./Navbar.css";
import logo from "../../../images/logo.png";
// import { useState } from 'react';
import { useRef } from "react";
import { Link } from "react-router-dom";
// import { Link, NavLink } from "react-router-dom";


function Navbar() {
    const navLinks = useRef();
    // const div1 = navLinks.current;
    // const Results = () => (
    //     <div id="navLinks" className="nav-Links">
    //     </div>
    //   )

      return (
        <nav className="navbar">
            <Link to="/">
                <img className="logo" src={logo} alt="logo">
                </img>
            </Link>
            <div ref={navLinks} className= 'nav-links' id="navLinks">
                <i className="fa fa-times"></i>
                <ul className="nav-links__list">
                    <li className="nav-links__item"><Link to="/" className="nav-links__link">Home</Link></li>
                    <li className="nav-links__item"><Link to="/" className="nav-links__link">About</Link></li>
                    <li className="nav-links__item"><Link to="/" className="nav-links__link">Courses</Link></li>
                    <li className="nav-links__item"><Link to="/" className="nav-links__link">Admission</Link></li>
                </ul>
            </div>
            <i className="fa fa-bars"></i>
        </nav>
        );
    }

export default Navbar;

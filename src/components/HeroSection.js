import React from "react";
import "./HeroSection.css";
import "./style.css";
import { Link } from "react-router-dom";

function HeroSection() {
    return (
        <div className="hero-text">
            <h1 className="hero-text__heading">Be your best</h1>
            <p className="hero-text__copy">
            In the most rapidly developing and competitive field of technology, Excellence University <br></br>creates a challenging and engaging environment
            </p>
            <Link to="/" className="hero-btn">Enroll Now</Link>
        </div>  
    );
}

export default HeroSection;

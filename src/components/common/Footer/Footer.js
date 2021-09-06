import React from "react";
import "./Footer.css";

function Footer() {
    return (
    <div className="footer">
        <h4 className="footer__heading">About Us</h4>
        <p className="footer__copy">Excellence University is a leading Educational institution based out of Delhi. The University has 
        established itself as a high quality education provider<br></br>with prime focus on holistic learning and imbibing competitive 
        abilities in students
        </p>
        <div className="footer_icons">
            <i className="fab fa-facebook style-icon"></i>
            <i className="fab fa-twitter style-icon"></i>
            <i className="fab fa-instagram style-icon"></i>
            <i className="fab fa-linkedin style-icon"></i>
        </div>
    </div> 
    );
}

export default Footer;

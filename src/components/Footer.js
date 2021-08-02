import React from "react";
import "./Footer.css";

function Footer() {
    return (
    <div class="footer">
        <h4 class="footer__heading">About Us</h4>
        <p class="footer__copy">Excellence University is a leading Educational institution based out of Delhi. The University has 
        established itself as a high quality education provider<br></br>with prime focus on holistic learning and imbibing competitive 
        abilities in students
        </p>
        <div class="footer_icons">
            <i class="fab fa-facebook style-icon"></i>
            <i class="fab fa-twitter style-icon"></i>
            <i class="fab fa-instagram style-icon"></i>
            <i class="fab fa-linkedin style-icon"></i>
        </div>
    </div> 
    );
}

export default Footer;

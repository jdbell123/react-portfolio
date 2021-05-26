import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faWhatsappSquare, faLinkedin, faTwitterSquare, faGithubSquare } from "@fortawesome/free-brands-svg-icons"
import "./style.css";

function Footer() {
    return (
        <footer className="footer mt-auto py-3 bg-light">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <span className="text-muted">&copy;John Bell 2021</span>
                    </div>
                    <div className="col justify-content-center">
                        <a href="mailto:jdbell123@gmail.com" id="contactEmail">jdbell123@gmail.com</a>
                        <p id="splitter"> | </p>
                        <a href="tel:7064426133" id="contactPhone">706-442-6133</a>
                        {/* <p>jdbell123@gmail.com | 706-442-6133</p> */}
                    </div>
                    <div className="col-auto">
                        <a className="me-1" href="https://www.linkedin.com/in/jdbell123" target="_blank" rel="noreferrer">
                            <span><FontAwesomeIcon icon={faLinkedin} size="3x" id="fa-linkedin" /></span>
                        </a>
                        <a className="me-1" href="https://github.com/jdbell123" target="_blank" rel="noreferrer">
                            <span><FontAwesomeIcon icon={faGithubSquare} size="3x" id="fa-github"/></span>
                        </a>
                        <a className="me-1" href="https://www.facebook.com/JohnDBell" target="_blank" rel="noreferrer">
                            <span><FontAwesomeIcon icon={faFacebookSquare} size="3x" id="fa-facebook"/></span>
                        </a>
                        <a className="me-1" href="https://twitter.com/jdbell123" target="_blank" rel="noreferrer">
                            <span><FontAwesomeIcon icon={faTwitterSquare} size="3x" id="fa-twitter"/></span>
                        </a>
                        <a className="me-1" href="https://wa.me/17064426133" target="_blank" rel="noreferrer">
                            <span><FontAwesomeIcon icon={faWhatsappSquare} size="3x" id="fa-whatsapp"/></span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
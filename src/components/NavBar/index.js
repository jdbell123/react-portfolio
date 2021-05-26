import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavBar() {

    const location = useLocation();

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="./index.html">John Bell</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to="/portfolio" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
                            Portfolio
                        </Link>
                        <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
                            Contact
                        </Link>
                        <Link to="/about" className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>
                            About
                        </Link>
                        <a className="nav-link" href="./JohnBellResume.pdf" download>| Resume</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
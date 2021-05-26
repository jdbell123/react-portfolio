import React from "react";
import "./style.css";

function ProjectCard (props) {
return (
    <div className="col-md-4 mb-2 mx-auto d-flex justify-content-center">
        <div className="card card-size text-center fw-bold border border-secondary">
            <div className=".card-img-div-size">
                <img src={props.src} className="card-img-top img-card-height " alt={props.alt}/>
            </div>
                 <p className="project-title">{props.title}</p>
            <div className="card-body d-flex align-items-center justify-content-center">
                 {/* <a className="card-text a-theme" href={props.href}>{props.title}</a> */}
                 <a href="https://jdbell123.github.io/Footy/" class="btn btn-primary mx-3 ">Visit App</a>
                 <a href={props.href} class="btn btn-primary mx-3 ">GitHub Repo</a>
            </div>
        </div>
    </div>
   
);
}

export default ProjectCard;
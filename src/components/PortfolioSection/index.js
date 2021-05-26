import Divvy from "./images/Divvy.png";
import BOS from "./images/Bakery_Ordering_System.png";
import CodingQuiz from "./images/CodingQuiz.png";
import PasswordGenerator from "./images/PasswordGenerator.png";
import ProjectFooty from "./images/Project Footy.png";
import WeatherDashboard from "./images/Weather-Dashboard.gif";


import ProjectCard from "../ProjectCard";

function PortfolioSection() {

    return (

        <div className="col-md-12 border border-secondary p-3 mt-3" id="display-section">

            <header className="row">
                <div className="col-md-12">
                    <h1 className=" py-3 border-bottom border-2 fw-bold fs-2">Portfolio</h1>
                </div>
                <p className="px-5 pt-3 fs-5">
                    Below are a few of my projects and assignments completed through my six month program at Georgia Tech. For a full list of my work,
                    as well as more detailed videos, project descriptions and links to deployed applications, <a className="a-theme" href="https://github.com/jdbell123">please checkout my github profile here!</a>
                </p>
            </header>
            <div className="row pt-3 px-5">
                <ProjectCard
                    src={Divvy}
                    alt="Divvy Ticketing App"
                    href="https://github.com/Kyle7286/Divvy"
                    title="Divvy Ticketing App"
                />
                <ProjectCard
                    src={BOS}
                    alt="Bakery Ordering System"
                    href="https://github.com/jdbell123/Bakery-Ordering-System"
                    title="Bakery Ordering System"
                />
                <ProjectCard
                    src={CodingQuiz}
                    alt="Coding Quiz"
                    href="https://github.com/jdbell123/coding-quiz"
                    title="Coding Quiz"
                />
            </div>
            <div className="row pt-3 px-5">
                <ProjectCard
                    src={PasswordGenerator}
                    alt="Password Generator"
                    href="https://github.com/jdbell123/password-generator"
                    title="Password Generator"
                />
                <ProjectCard
                    src={WeatherDashboard}
                    alt="Weather Dashboard"
                    href="https://github.com/jdbell123/weather-dashboard"
                    title="Weather Dashboard"
                />
                <ProjectCard
                    src={ProjectFooty}
                    alt="Footy App"
                    href="https://github.com/jdbell123/Footy"
                    title="Footy App"
                />
            </div>

        </div>

    );
}

export default PortfolioSection;
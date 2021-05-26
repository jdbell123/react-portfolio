import React from "react";
import aboutMeImage from "./aboutMeImage.jpg";

function AboutMe() {
    return (
        <div className="border border-secondary p-3 mt-3" id="display-section">
            <header className="row">
                <div className="col-md-12">
                    <h1 className=" py-3 border-bottom border-2 fw-bold fs-2">About Me</h1>
                </div>
            </header>
            <div className="row pt-3">
                <div className="col-md-12 fs-5">
                    <img src={aboutMeImage} width="200" className="img-fluid float-start me-3" alt="Me and My Family" />
                    <p>
                        Hello and welcome to my portfolio page. My name is John Bell and I currently reside in
                        Columbus, Georgia. I am originally from England and have lived in the United States of America
                        since December 2007.

                        I have worked in the IT industry now for over 23 years and have held various roles in that time.
                        I started off as
                        junior programmer working for Equifax in Bradford, England. My current role is a Software
                        Engineer Consultant at Global Payments Inc.
                        The current role I serve in at the moment is in the modernization team. The company is looking
                        at moving to a more cloud based system.

                        I am doing this bootcamp to better understand and learn more on the full stack role and hope to
                        be able to use the new skills in enabling me
                        to work on this kind of work at Global Payments.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 fs-5">
                    <p>
                        Outside of work I like spending time with family and friends and playing sports. I am a
                        passionate Sheffield Wednesday fan and have
                        supported them my whole life. I also like to hike, play tennis, play football (soccer) and swim.
                        Other hobbies/past times include
                        reading and doing handyman type things around the house.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
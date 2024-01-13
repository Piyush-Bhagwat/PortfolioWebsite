import React, { useEffect, useState } from "react";
import "../assets/styles/homepage.css";

//Images
import myImg from "../assets/images/myPic.jpg";
import notespoolIMG from "../assets/images/notesPool.png";
import samuha from "../assets/images/samuha.png";
import flashCardIMG from "../assets/images/flashCard.png";
import lodiaIMG from "../assets/images/lodiaHallDesktop.png";
import { Link } from "react-router-dom";

const HomePage = () => {
    const handleCardGlow = (e) => {
        const { currentTarget: target } = e;
        const rect = target.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;

        target.style.setProperty("--mouse-y", `${y}px`);
        target.style.setProperty("--mouse-x", `${x}px`);
    };

    useEffect(() => {
        for (const card of document.querySelectorAll(".bento-card")) {
            card.onmousemove = (e) => handleCardGlow(e);
        }
    }, []);

    return (
        <div className="home-page">
            <div className="bento">
                <div className="bento-card big-text left-align verti-center vertical">
                    <img src={myImg} className="my-img" />
                    Hey I am Piyush Bhagwat, An Abnormal webdeveloper. I love to
                    make minmal website like this :)
                </div>

                <div className="bento-card CTA textured">
                    <h1 className="bold">LET ME BUILD WEBSITE FOR YOU</h1>
                    <a href="mailto:piyushbhagwat5@gmail.com?subject=Work Request!">
                        <button> Email</button>
                    </a>
                </div>

                <div className="bento-card skills">
                    <h1>SKILLS</h1>
                    <div className="skills-container">
                        <div className="skills-card">MERN</div>
                        <div className="skills-card">ReactJS</div>
                        <div className="skills-card">Redux</div>
                        <div className="skills-card">Front-end Development</div>
                        <div className="skills-card">BackEnd Dev</div>
                        <div className="skills-card">C++</div>
                        <div className="skills-card">JavaScript</div>
                        <div className="skills-card">Leadership</div>
                        <div className="skills-card">TeamWork</div>
                    </div>
                </div>

                <div className="bento-card col-span-2">
                    <Link to="/project" className="title-link">
                        <h1>PROJECTS</h1>
                    </Link>

                    <div className="projects">
                        <div className="project-card-home">
                            <img src={samuha} alt="project1" />
                        </div>
                        <div className="project-card-home">
                            <img src={notespoolIMG} alt="project1" />
                        </div>
                        <div className="project-card-home">
                            <img src={flashCardIMG} alt="project1" />
                        </div>
                        <div className="project-card-home">
                            <img src={lodiaIMG} alt="project1" />
                        </div>
                    </div>
                </div>
                <div className="bento-card ">
                    <h1>SOCIALS</h1>

                    <div className="social-links">
                        <a href="#">
                            <i className="fa-brands fa-square-instagram"></i>
                        </a>
                        <a href="#">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                        <a href="#">
                            <i className="fa-brands fa-youtube"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;

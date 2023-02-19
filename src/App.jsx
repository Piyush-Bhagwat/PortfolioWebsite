import React, { useEffect } from "react";
import "./assets/styles/app.css";

import myImg from "./assets/images/myPic.jpg";
import Image from "./components/Image";
import lessImg from "./assets/images/lessIsMore.jpg";
import lodiaHallDesktopImg from "./assets/images/lodiaHallDesktop.png";
import flashCardImg from "./assets/images/flashCard.png";
import transportationProblemImg from "./assets/images/transportationProblem.png";
import friendsImg from "./assets/images/friends.jpg";
import Navbar from "./components/navbar";
import ImageCard from "./components/imageCard";
import SocialLinks from "./components/socialLink";
import Button from "./components/Button";

export default function App() {
    const followMouse = (e, interacting) => {
        const trailer = document.getElementById("trailer");

        const x = e.clientX - trailer.offsetWidth / 2,
            y = e.clientY - trailer.offsetHeight / 2;

        const moveKeyframe = {
            transform: `translate(${x}px, ${y}px)`,
        };
        const hoverKeyFrame = {
            transform: `translate(${x}px, ${y}px) scale(${
                interacting ? "1.4" : "1"
            })`,
            border: `solid ${
                interacting ? " var(--promminantColor) 2px" : "black 1px"
            }`,
            backdropFilter: `blur(${interacting ? "0px" : "3px"})`,
        };

        trailer.animate(moveKeyframe, {
            duration: 800,
            fill: "forwards",
        });

        trailer.animate(hoverKeyFrame, {
            duration: 200,
            fill: "forwards",
        });
    };

    useEffect(() => {
        window.onmousemove = (e) => {
            const interactable = e.target.closest("a");
            const interacting = interactable !== null;
            followMouse(e, interacting);
        };
    }, []);

    return (
        <div className="App">
            <div id="trailer"></div>

            <Navbar />

            <section className="hero" id="home">
                <div className="row">
                    <div className="col-lg-6 v-center">
                        <h1>
                            Hello I Am{" "}
                            <span className="prominant-text">
                                {" "}
                                Piyush Bhagwat
                            </span>
                        </h1>
                        <h3>
                            An <span className="prominant-text">abNORMAL</span>{" "}
                            Web Developer
                        </h3>

                        <Button
                            href="mailto:piyushbhagwat5@gmail.com?subject=Work Request!"
                            lable="Email Me"
                            cls="CTA"
                        />
                    </div>

                    <div className="col-lg-6 h-center">
                        <Image img={myImg} />
                    </div>
                </div>
            </section>

            <div className="down-arrow">
                <i className="fa-solid fa-chevron-down"></i>
            </div>

            <section className="about" id="about">
                <h1>
                    Who Am <span className="prominant-text"> I </span>?
                </h1>
                <div className="row">
                    <div className="col-lg-6 v-center">
                        <p>
                            I am a tech enthusiast from Nagpur. I believe in
                            minimalism which says 'less is more'. We can follow
                            this principle in the designs too. I love to make
                            minimal websites that convey the message in a simple
                            yet elegant way.
                        </p>
                    </div>
                    <div className="col-lg-6 h-center">
                        <Image img={lessImg} />
                    </div>
                </div>
            </section>

            <section id="portfolio">
                <h1>
                    Some Of My{" "}
                    <span className="prominant-text"> Projects </span>
                </h1>

                <div className="projects">
                    <ImageCard
                        img={flashCardImg}
                        title="Flash Card"
                        disc="Note Taking WebApp made using ReactJS in front end
                        and Firebase as backend"
                        link="https://flashcard-75ea0.web.app/"
                        tags={["React", "Firebase", "NodeJS"]}
                    />

                    <ImageCard
                        img={lodiaHallDesktopImg}
                        title="Banquet Hall"
                        disc="A Website for a Banquet hall. It was a project given
                        by Elmentrix"
                        link="https://piyush-bhagwat.github.io/Lodia-Hall/"
                        tags={["WebDesign", "HTML", "CSS", "JS"]}
                    />

                    <ImageCard
                        img={transportationProblemImg}
                        title="Transportation Problem Solver"
                        disc="A Web App to solve the transportation problems in 5
                        methods. Made using plain JS."
                        link="https://piyush-bhagwat.github.io/Transportation-Problem/"
                        tags={["Logic", "C++", "JavaScript"]}
                    />
                </div>
            </section>

            <section id="social">
                <h1>
                    Lets Be <span className="prominant-text"> Friends</span>
                </h1>
                <div className="row">
                    <div className="col-lg-6 v-center">
                        <p>
                            I am mostly active on my Social Handles. If you want
                            to be friends with me then feel free to follow me,
                            you can even Email me
                        </p>
                        <SocialLinks />
                        <Button
                            href="mailto:piyushbhagwat5@gmail.com?subject=Work Request!"
                            lable="Email Me"
                            cls="CTA"
                        />
                    </div>
                    <div className="col-lg-6 h-center">
                        <Image img={friendsImg} />
                    </div>
                </div>
            </section>

            <section id="footer">
                <p>
                    {" "}
                    Site made by <a href="https://github.com/Piyush-Bhagwat">abNORMAL</a>
                </p>
            </section>
        </div>
    );
}

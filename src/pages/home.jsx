import React, { useState } from "react";
import Button from "../components/Button";
import Image from "../components/Image";
import ProjectCard from "../components/projectCard";
import { projectInfo } from "../projects";
import SocialLinks from "../components/socialLink";

//Images
import myImg from "../assets/images/myPic.jpg";
import friendsImg from "../assets/images/friends.jpg";
import lessImg from "../assets/images/lessIsMore.jpg";


const HomePage = () => {
    const [more, setMore] = useState(false);

    const renderProjects = (limit) => {
        return (
            <div className="projects">
                {projectInfo.map((pro, id) => {
                    if (id < limit) {
                        return (
                            <ProjectCard
                                img={pro.img}
                                title={pro.title}
                                disc={pro.disc}
                                link={pro.link}
                                tags={pro.tags}
                            />
                        );
                    }
                })}
            </div>
        );
    };

    return (
        <div className="home-page">
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

                {renderProjects(more ? 12 : 3)}

                <button
                    className="bton"
                    onClick={() => setMore((prev) => !prev)}
                >
                    Show {more ? "Less" : "More"}
                </button>
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
        </div>
    );
};

export default HomePage;

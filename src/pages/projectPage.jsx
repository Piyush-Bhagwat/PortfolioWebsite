import React from "react";
import { useParams } from "react-router-dom";
import { projectDetails } from "../projects";
import "../assets/styles/project.css";

const ProjectPage = () => {
    const { id } = useParams();
    const project = projectDetails[id];

    const renderList = (ar, clsName) => {
        return (
            <ul className={clsName}>
                {ar.map((ele) => (
                    <li>{ele}</li>
                ))}
            </ul>
        );
    };

    const renderProblems = () => {
        if (project.problems.length === 0) return;
        return (
            <section className="problems">
                <h2>Problems Faced</h2>
                {project.problems.map((set) => {
                    return (
                        <div className="pair">
                            <h3>Q. {set.que}</h3>
                            <p>
                                {" "}
                                {">"} {set.ans}
                            </p>
                        </div>
                    );
                })}
            </section>
        );
    };

    return (
        <div className="project-page">
            <div className="title">
                <div className="title-box">
                    <h1>{project.title}</h1>
                    <a href={project.link} target="_blank">
                        <i class="fa-solid fa-link"></i>
                    </a>
                </div>
                <h4>{project.disc}</h4>
                <img src={project.img} alt="projectImage" />
            </div>

            <section className="why">
                <h2>Why?</h2>
                <p>{project.why}</p>
            </section>

            <div className="features">
                <div className="left">
                    <div className="upper">
                        {project.api.length !== 0 && (
                            <div className="api block">
                                <h2>APIs Used</h2>
                                {renderList(project.api, "api-list")}
                            </div>
                        )}
                        {project.learning.length !== 0 && (
                            <div className="learning block">
                                <h2>Learnings</h2>
                                {renderList(project.learning, "learning-list")}
                            </div>
                        )}
                    </div>

                    <div className="lower">
                        {project.tech.length !== 0 && (
                            <div className="tech block">
                                <h2>Technologies Used</h2>
                                {renderList(project.tech, "tech-list")}
                            </div>
                        )}
                        {project.modules.length !== 0 && (
                            <div className="modules block">
                                <h2>Modules Used</h2>
                                {renderList(project.modules, "modules-list")}
                            </div>
                        )}
                    </div>
                </div>

                <div className="right"></div>
            </div>

            {renderProblems()}
        </div>
    );
};

export default ProjectPage;

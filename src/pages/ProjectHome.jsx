import React from "react";
import dictIMG from "../assets/images/dictnoary.png";
import flashIMG from "../assets/images/flashCard.png";
import elemIMG from "../assets/images/elementrix.png";
import notesIMG from "../assets/images/notesPool.png";
import { projectInfo } from "../projects";
import ProjectCard from "../components/projectCard";

const renderProjects = () => {
    return projectInfo.map((project, id) => {
        return (
            <ProjectCard
                title={project.title}
                key={id}
                id={id}
                img={project.img}
                tags={project.tags}
            />
        );
    });
};

const ProjectHome = () => {
    return (
        <div className="project-list">
            {renderProjects()}
        </div>
    );
};

export default ProjectHome;

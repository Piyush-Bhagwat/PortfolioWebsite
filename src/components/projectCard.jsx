import React from "react";
import Tag from "./tag";
import { Link } from "react-router-dom";

export default function ProjectCard({ img, title, tags, id}) {
    const renderTags = () => {
        return (
            <div className="tag-box">
                {tags.map((tag, id) => {
                    console.log(tag);
                    return <Tag key={id} tag={tag} />;
                })}{" "}
            </div>
        );
    };

    return (
        <div className="project-card">
            <h2>{title}</h2>
            <img src={img} alt="project-img" />
            <div className="expand-circle"></div>
            <Link to={`/project/${id}`} className="arrow">
                <i className="fa-solid fa-arrow-right"></i>
            </Link>
        </div>
    );
}

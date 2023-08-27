import React from "react";
import Tag from "./tag";

export default function ProjectCard({ img, title, disc, link, tags }) {
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
            <img src={img} alt="project1" />
            <a href={link} target="_blank">
                <h2>{title}</h2>
            </a>
            <p>{disc}</p>
            {renderTags()}
        </div>
    );
}

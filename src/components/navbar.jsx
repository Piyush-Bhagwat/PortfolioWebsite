import React from "react";

export default function Navbar() {
    return (
        <>
            <div className="nav ">
                <h4 className="logo-text">abNORMAL</h4>
                <ul>
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#portfolio">Portfolio</a>
                    </li>
                    <li>
                        <a href="mailto:piyushbhagwat5@gmail.com?subject=Work Request!">
                            lets Work
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
}

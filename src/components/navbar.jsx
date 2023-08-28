import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <div className="nav ">
                <h4 className="logo-text">abNORMAL</h4>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">About</Link>
                    </li>
                    <li>
                        <Link to="/">Portfolio</Link>
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

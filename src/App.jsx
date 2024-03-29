import React, { useEffect } from "react";
import "./assets/styles/app.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Navbar from "./components/navbar";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/projectPage";
import ProjectHome from "./pages/ProjectHome";

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
                interacting ? " var(--promminantColor) 2px" : "white 1px"
            }`,
            backdropFilter: `invert(${interacting ? "0" : "1"})`,
        };

        trailer.animate(moveKeyframe, {
            duration: 800,
            fill: "forwards",
        });

        trailer.animate(hoverKeyFrame, {
            duration: 400,
            fill: "forwards",
        });
    };

    useEffect(() => {
        window.onmousemove = (e) => {
            const interactable =
                e.target.closest("a") || e.target.closest(".bton");
            const interacting = interactable !== null;
            followMouse(e, interacting);
        };
    }, []);

    return (
        <BrowserRouter>
            <div className="App">
                <div id="trailer"></div>

                <Navbar />

                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/project" element={<ProjectHome />} />
                    <Route path="/project/:id" element={<ProjectPage />} />
                </Routes>

                <section id="footer">
                    <p>
                        Site made by
                        <a href="https://github.com/Piyush-Bhagwat">abNORMAL</a>
                    </p>
                </section>
            </div>
        </BrowserRouter>
    );
}

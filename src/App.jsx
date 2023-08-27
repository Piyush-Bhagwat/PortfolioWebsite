import React, { useEffect } from "react";
import "./assets/styles/app.css";

import Navbar from "./components/navbar";
import HomePage from "./pages/home";

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

            
            <HomePage />

            <section id="footer">
                <p>
                    Site made by
                    <a href="https://github.com/Piyush-Bhagwat">abNORMAL</a>
                </p>
            </section>
        </div>
    );
}

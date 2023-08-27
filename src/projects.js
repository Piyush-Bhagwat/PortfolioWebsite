
import lodiaHallDesktopImg from "./assets/images/lodiaHallDesktop.png";
import flashCardImg from "./assets/images/flashCard.png";
import transportationProblemImg from "./assets/images/transportationProblem.png";
import dictonaryImg from "./assets/images/dictnoary.png";
import notesPoolImg from "./assets/images/notesPool.png";

const projects = [
    
    {
        img: notesPoolImg,
        title: "Notes Pool",
        disc: "Online Study material Saving webapp for BCA students",
        link: "https://notespool.netlify.app/",
        tags: ["React", "FireBase", "File Storage"],
    },
    {
        img: dictonaryImg,
        title: "Dictionary",
        disc: "A Dictionary WebApp made using dictionaryapi.dev",
        link: "https://dictinory.netlify.app/",
        tags: ["React", "Front-End", "API"],
    },
    {
        img: flashCardImg,
        title: "Flash Card",
        disc: "Note Taking WebApp made using ReactJS in front end and Firebase as backend",
        link: "https://flashcard-75ea0.web.app/",
        tags: ["React", "FireBase", "NodeJS"],
    },
    {
        img: lodiaHallDesktopImg,
        title: "Banquet Hall",
        disc: "A Website for a Banquet hall. It was a project given by Elmentrix",
        link: "https://piyush-bhagwat.github.io/Lodia-Hall/",
        tags: ["WebDesign", "HTML", "CSS", "JS"],
    },
    {
        img: transportationProblemImg,
        title: "Transportation Problem Solver",
        disc: "A Web App to solve the transportation problems in 5 methods. Made using plain JS.",
        link: "https://piyush-bhagwat.github.io/Transportation-Problem/",
        tags: ["Logic", "C++", "JavaScript"],
    },
];

export {projects};
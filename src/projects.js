import lodiaHallDesktopImg from "./assets/images/lodiaHallDesktop.png";
import flashCardImg from "./assets/images/flashCard.png";
import transportationProblemImg from "./assets/images/transportationProblem.png";
import dictonaryImg from "./assets/images/dictnoary.png";
import notesPoolImg from "./assets/images/notesPool.png";
import elemtrixImg from "./assets/images/elementrix.png";

const projectInfo = [
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
        img: elemtrixImg,
        title: "Elemntrix Website",
        disc: "Desingned a website for Elmentrix",
        link: "https://piyush-bhagwat.github.io/ElmtrixWebsite/",
        tags: ["HTML", "CSS", "JavaScript"],
    },
    {
        img: transportationProblemImg,
        title: "Transportation Problem Solver",
        disc: "A Web App to solve the transportation problems in 5 methods. Made using plain JS.",
        link: "https://piyush-bhagwat.github.io/Transportation-Problem/",
        tags: ["Logic", "C++", "JavaScript"],
    },
];

const projectDetails = [
    {
        title: "Notes Pool",
        disp: "A Online File Storage System Made for BCA Students",
        img: notesPoolImg,
        why: `I have made this WebApp to make a storage system for Study material's.
        In our college there was no good system for storing study materials. At the time
        of exams evveryone was having problem to get the notes. To solve this issue this
        i have came up with this WebApp. `,
        api: ["some", "thing"],
        learning: ["File Saving", "CORS"],
        tech: ["ReactJS", "FireBase"],
        modules: ["Tostify", "Spinners"],
        problems: [
            {
                "How to deploy environment variables in render.com": `Do not add "config.env" files to GitHub, as this may expose secret 
                passwords to the public. Instead, go to render.com, where we have deployed the backend. Once there, navigate 
                to render → environment → secret files. Create a new file called "config.env" and add the contents of "config" 
                to it. Then, click "Save Changes". This way, we will be able to access environment variables without exposing 
                "config.env" to the public.`,
            },
        ],
    },
];

export { projectInfo, projectDetails };

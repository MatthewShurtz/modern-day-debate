import "./main.css";
import "animate.css"
import createHeader from "./header.js";
import createAbout from "./about.js";
import observerEffect from "./observe.js";
import createReasonForDebate from "./reasonfordebates.js";
import createFeaturedDebates from "./featured-debates";


const body = document.querySelector('body')
let debateVideosSrc = ["https://www.youtube.com/embed/yGxSf4zJAso", "https://www.youtube.com/embed/aNgRPH5pD00", "https://www.youtube.com/embed/29qDJHoDStA", "https://www.youtube.com/embed/cAvFs2l9wWk", "https://www.youtube.com/embed/EPvGOFQaWYA", "https://www.youtube.com/embed/q6NnCiosNwE"]

body.appendChild(createHeader())
body.appendChild(createAbout())
body.appendChild(createReasonForDebate())
body.appendChild(createFeaturedDebates(debateVideosSrc))

const headerLogo = document.getElementById('header-logo')
const about = document.getElementById('about-text')
const conVid = document.getElementById('reason-sec')
const debateSecEffect = document.getElementById('debate-section')


observerEffect(headerLogo, 'animate__flash', 'animate__slow')
observerEffect(about, 'animate__fadeIn', 'animate__slower')
observerEffect(conVid, 'animate__fadeIn', 'animate__slower')
observerEffect(debateSecEffect, 'animate__fadeIn', 'animate__slower')
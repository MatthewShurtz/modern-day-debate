import "./main.css";
import "animate.css"
import createHeader from "./header.js";
import createAbout from "./about.js";
import observerEffect from "./observe.js";
import createReasonForDebate from "./reasonfordebates.js";

const body = document.querySelector('body')


body.appendChild(createHeader())
body.appendChild(createAbout())
body.appendChild(createReasonForDebate())

const about = document.getElementById('about-text')
const conVid = document.getElementById('reason-sec')

observerEffect(about, 'animate__fadeIn')
observerEffect(conVid, 'animate__fadeIn')
import "./main.css";
import "animate.css"
import createHeader from "./header.js";
import createAbout from "./about.js";
import appearOnScroll from "./observe.js";
import createReasonForDebate from "./reasonfordebates.js";

const body = document.querySelector('body')
body.appendChild(createHeader())
body.appendChild(createAbout())
body.appendChild(createReasonForDebate())

const about = document.getElementById('about-text')
const conVid = document.getElementById('reason-sec')
appearOnScroll(about)
appearOnScroll(conVid)
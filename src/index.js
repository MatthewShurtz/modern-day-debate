import "./main.css";
import "animate.css"
import createHeader from "./header.js";
import { createAbout, appearOnScroll } from "./about.js";

const body = document.querySelector('body')
body.appendChild(createHeader())
body.appendChild(createAbout())

const about = document.getElementById('about-text')
appearOnScroll(about)
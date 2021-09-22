function createAbout () {
    const aboutSec = document.createElement('section')
    aboutSec.id = "about-text"

    const aboutSecHead = document.createElement('h1')
    aboutSecHead.textContent = "We are a neutral debate platform that discusses science, religion, and politics"
    aboutSecHead.style.textAlign = "center"

    const aboutText = document.createElement('p')
    aboutText.textContent = "My name is James and I'm a doctoral student in psychology in CO, US. In my own academic journey, some academics (though to be fair, not all) have become closed to controversial people or topics and actually want to exclude people that question the status quo. Thus, my goal is to provide a non-partisan and truly-tolerant debate platform that welcomes everyone."
    aboutText.classList.add('center-text')
    
    aboutSec.appendChild(aboutSecHead)
    aboutSec.appendChild(aboutText);

    return aboutSec
}

export default createAbout
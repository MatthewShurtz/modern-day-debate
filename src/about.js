function createAbout () {
    const aboutSec = document.createElement('section')
    aboutSec.id = "about-text"

    const aboutSecHead = document.createElement('h2')
    aboutSecHead.textContent = "Modern-Day Debate's story"
    aboutSecHead.classList.add('center-text')

    const aboutText = document.createElement('p')
    aboutText.textContent = "My name is James and I'm a doctoral student in psychology in CO, US. In my own academic journey, some academics (though to be fair, not all) have become closed to controversial people or topics and actually want to exclude people that question the status quo. Thus, my goal is to provide a non-partisan and truly-tolerant debate platform that welcomes everyone."
    aboutText.classList.add('center-text')
    
    aboutSec.appendChild(aboutSecHead)
    aboutSec.appendChild(aboutText);

    return aboutSec
}

function appearOnScroll(item) {
  const options = {
    threshold: 0,
    rootMargin: '50px'
    }

    const observer = 
    new IntersectionObserver(function(
        entries, observer) {
    entries.forEach(entry => {
        console.log(entry)
        if (!entry.isIntersecting) {
            return;
        } else {
            console.log(entry.target)
            entry.target.classList.add('animate__animated', 'animate__fadeIn', 'animate__slower')
        }
    })
    }, options)
    observer.observe(item)
}   

export { createAbout, appearOnScroll }
function createAbout () {
    const aboutSec = document.createElement('section')
    const aboutText = document.createElement('p')
    aboutText.textContent = "Modern-Day Debate's story: My name is James and I'm a doctoral student in psychology in CO, US. In my own academic journey, some academics (though to be fair, not all) have become closed to controversial people or topics and actually want to exclude people that question the status quo. Thus, my goal is to provide a non-partisan and truly-tolerant debate platform that welcomes everyone."
    aboutText.id = "about-text"
    aboutSec.appendChild(aboutText);

    return aboutSec
}

function appearOnScroll(item) {
  const options = {
    threshold: 0,
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
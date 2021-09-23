function createFeaturedDebates(videoSrc) {
    const featuredDebateSec = document.createElement('section');
    featuredDebateSec.id = "debate-section"

    const debateHeader = document.createElement('p')
    debateHeader.textContent = "Some of our Juicy Debates"
    debateHeader.classList.add('center-text', 'header-font-size')
    debateHeader.style.color = "whitesmoke"
    featuredDebateSec.appendChild(debateHeader)

    const debateVideoGrid = document.createElement('div')
    debateVideoGrid.classList.add('grid')
    debateVideoGrid.id = "debate-video-grid"

    videoSrc.forEach(src => {
        let debateIframe = document.createElement('iframe')
        debateIframe.src = src
        debateIframe.classList.add('debate-video')
        debateVideoGrid.appendChild(debateIframe)
    });

    featuredDebateSec.appendChild(debateVideoGrid)    

    return featuredDebateSec
}

export default createFeaturedDebates
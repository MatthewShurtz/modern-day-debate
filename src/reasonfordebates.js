function createReasonForDebate() {
    const reasonForDebateSec = document.createElement('section')
    reasonForDebateSec.id = "reason-sec"
    
    const reasonForDebateHead = document.createElement('p')
    reasonForDebateHead.textContent = "Why We Host Controversial Debates"
    reasonForDebateHead.classList.add('center-text', 'header-font-size')
    reasonForDebateHead.style.color = "whitesmoke"

    const controversialReasonVid = document.createElement('iframe')
    controversialReasonVid.src = "https://www.youtube.com/embed/jfsJ40pCfCI"
    controversialReasonVid.id = "controversial-reason-vid"
    controversialReasonVid.title = "Youtube video player"
    controversialReasonVid.allow = "autoplay; encrypted-media; gyroscope; picture-in-picture"
    controversialReasonVid.allowFullscreen

    reasonForDebateSec.appendChild(reasonForDebateHead)
    reasonForDebateSec.appendChild(controversialReasonVid)

    return reasonForDebateSec
}

export default createReasonForDebate

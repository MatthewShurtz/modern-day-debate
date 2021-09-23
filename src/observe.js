function observerEffect(item, animation) {
  const options = {
    threshold: 0,
    rootMargin: '50px'
    }

    const observer = 
    new IntersectionObserver(function(
        entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('animate__animated', animation, 'animate__slower')
        }
    })
    }, options)
    observer.observe(item)
}



export default observerEffect
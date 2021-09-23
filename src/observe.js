function observerEffect(item, animation, speed) {
  const options = {
    threshold: 0,
    rootMargin: '15px'
    }

    const observer = 
    new IntersectionObserver(function(
        entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('animate__animated', animation, speed)
        }
    })
    }, options)
    observer.observe(item)
}



export default observerEffect
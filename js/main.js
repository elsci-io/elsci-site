'use strict'

document.addEventListener("DOMContentLoaded",  () => {
    document.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', (evt) => {
            let elementId = a.hash;
            if (elementId.length){
                evt.preventDefault();
                let element = document.querySelector(elementId);
                let top = element.getBoundingClientRect().top;
                window.scrollTo({top: top, behavior: 'smooth'})
                setTimeout(() => {
                    window.location.hash = elementId;
                }, 800)
            }
        })
    })
});
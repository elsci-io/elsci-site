const popup = document.querySelector(".popup");
const images = document.querySelectorAll(".merch-card__image");

images.forEach(image => {
    image.addEventListener('click', () => zoomIn(image))
});

popup.addEventListener('click', zoomOut);

function zoomIn(image) {
    const imgSrc = image.getAttribute("src");
    popup.classList.toggle("visible");
    document
        .querySelector(".popup-content img")
        .setAttribute("src", imgSrc);
    const imageId = image.getAttribute('id');
    const currentUrl = window.location.href;
    let newUrl = '';
    if (currentUrl.includes('#')) {
        newUrl = currentUrl.replace(/#(.*)/, '#' + imageId);
    } else {
        newUrl = currentUrl + '#' + imageId;
    }
    history.pushState(null, null, newUrl);
    document.body.classList.toggle("lock");
}

function zoomOut() {
    popup.classList.toggle("visible");
    document.body.classList.toggle("lock");
    removeHashFromURL()
}

function removeHashFromURL() {
    const url = window.location.href;
    const index = url.indexOf('#');

    if (index !== -1) {
        const newUrl = url.slice(0, index);
        window.location.replace(newUrl);
    }
}
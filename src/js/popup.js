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
}

function zoomOut() {
    popup.classList.toggle("visible");
}
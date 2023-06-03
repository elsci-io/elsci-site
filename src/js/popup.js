const popup = document.querySelector(".popup");
const images = document.querySelectorAll(".merch-card__image");
const lockPaddingValue = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
const body = document.querySelector('body');
const header = document.querySelector('header');
const popupImage = document.querySelector(".popup-image");
const hashValue = window.location.hash.slice(1);


// Zooming image, if url include hash

if (hashValue && hashValue != "top") {
    const hashImage = document.querySelector(`[id=${hashValue}]`);
    const hashSRC = hashImage['src']
    popup.classList.toggle("visible");
    popupImage.setAttribute("src", hashSRC);
    bodyLock();
}


// Add Event Listeners to images and popup-element

images.forEach(image => {
    image.addEventListener('click', (event) => zoomIn(event))
});

popup.addEventListener('click', (event) => zoomOut(event));


// Functions that zoom/unzoom the image

function zoomIn(event) {
    const imgSrc = event.target.getAttribute("src");
    const imageId = event.target.getAttribute('id');
    popup.classList.toggle("visible");
    popupImage.setAttribute("src", imgSrc);
    bodyLock();
    addHashToURL(imageId);
    event.preventDefault();
}

function zoomOut(event) {
    popup.classList.toggle("visible");
    popupImage.removeAttribute("src");
    bodyUnLock();
    removeHashFromURL();
    event.preventDefault();
}


//Functions that block/unblock scrolling and screen shift

function bodyLock() {
    header.setAttribute("style", `padding-right: ${lockPaddingValue}`);
    body.setAttribute("style", `padding-right: ${lockPaddingValue}`);
    body.classList.add("lock");
}

function bodyUnLock() {
    header.removeAttribute("style");
    body.removeAttribute("style");
    body.classList.remove("lock");
}


// Functions that add/remov hash from URL

function addHashToURL(imageId) {
    const currentUrl = window.location.href;
    let newUrl = '';
    if (currentUrl.includes('#')) {
        newUrl = currentUrl.replace(/#(.*)/, '#' + imageId);
    } else {
        newUrl = currentUrl + '#' + imageId;
    }
    history.pushState(null, null, newUrl);
}

function removeHashFromURL() {
    const url = window.location.href;
    const index = url.indexOf('#');
    if (index !== -1) {
        const newUrl = url.slice(0, index) + "#top";
        window.location.replace(newUrl);
    }
}
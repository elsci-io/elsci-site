document.querySelector(".header__burger").addEventListener("click", () => {
    document
        .querySelector(".header__burger")
        .classList.toggle("active");
    document
        .querySelector(".header-elsci__navigation")
        .classList.toggle("active");
    document.body.classList.toggle("lock");
});

document.querySelector('.header__link--bookmarks').addEventListener('click', () => {
    document
        .querySelector(".header__burger")
        .classList.remove("active");
    document
        .querySelector(".header-elsci__navigation")
        .classList.remove("active");
    document.body.classList.remove("lock");
});

window.addEventListener('scroll', (el) => {
    document.querySelector('.header-elsci').classList.toggle('scroll', document.scrollingElement.scrollTop != 0);
    if (document.querySelector('.header-peaksel')) {
        document.querySelector('.header-peaksel').classList.toggle('scroll', document.scrollingElement.scrollTop != 0)
    }
    if (document.querySelector('.header-molevent')) {
        document.querySelector('.header-molevent').classList.toggle('scroll', document.scrollingElement.scrollTop != 0)
    }
});

const pageName = document.querySelector('main').dataset.page;
console.log(pageName);
if (pageName) {
    document.querySelector(`.navigation-list__item[data-page="${pageName}"]`).classList.add('active');
}

const siteName = document.querySelector('main').dataset.context;
if (siteName) {
    document.querySelector('.header-elsci').classList.add('sub-header')
} 
if (siteName == 'peaksel') {
    document.querySelector('.header-elsci__logo-peaksel').classList.add('active');
    document.querySelector('.navigation-list--peaksel').classList.add('active')
}
if (siteName == 'molevent') {
    document.querySelector('.header-elsci__logo-molevent').classList.add('active')
}

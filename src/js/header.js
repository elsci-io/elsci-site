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
    document.querySelector('.company-header').classList.toggle('scroll', document.scrollingElement.scrollTop !== 0);
    if (document.querySelector('.product-header'))
        document.querySelector('.product-header').classList.toggle('scroll', document.scrollingElement.scrollTop !== 0)
});

const pageName = document.querySelector('main').dataset.page;
if (pageName) {
    document.querySelector(`.navigation-list__item[data-page="${pageName}"]`).classList.add('active');
}

const siteName = document.querySelector('main').dataset.context;
if (siteName) {
    document.querySelector('.company-header').classList.add('sub-header')
} 
if (siteName === 'peaksel') {
    document.querySelector('.header-elsci__logo-peaksel').classList.add('active');
    document.querySelector('.navigation-list--peaksel').classList.add('active')
}
if (siteName === 'molevent') {
    document.querySelector('.header-elsci__logo-molevent').classList.add('active');
    document.querySelector('.navigation-list--molevent').classList.add('active')
}

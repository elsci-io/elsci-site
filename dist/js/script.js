document.querySelector(".header__burger").addEventListener("click", () => {
    document
        .querySelector(".header__burger")
        .classList.toggle("active");
    document
        .querySelector(".header-elsci__navigation")
        .classList.toggle("active");
    document.body.classList.toggle("lock");
});

window.addEventListener('scroll', (el) => {
    document.querySelector('.header-elsci').classList.toggle('scroll', document.scrollingElement.scrollTop != 0)
})

const pageName = document.querySelector('main').dataset.page;
if (pageName) {
    document.querySelector(`.navigation-list__item[data-page="${pageName}"]`).classList.add("active");
}


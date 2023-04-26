document.querySelector(".header__burger").addEventListener("click", () => {
    document
        .querySelector(".header__burger")
        .classList.toggle("active");
    document
        .querySelector(".header-elsci__navigation")
        .classList.toggle("active");
    document.body.classList.toggle("lock");
});

const pageName = document.querySelector('main').dataset.page;
document.querySelector(`.navigation-list__item[data-page="${pageName}"]`).classList.add("active");
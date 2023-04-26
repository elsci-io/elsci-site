document.querySelector(".header-elsci__menu-burger").addEventListener("click", () => {
        document
            .querySelector(".header-elsci__menu-burger")
            .classList.toggle("active");
        document
            .querySelector(".header-elsci__navigation")
        .classList.toggle("active");
    document.querySelector("body").classList.toggle("lock")
});

const pageName = document.querySelector('main').dataset.page;
document.querySelector(`.header__link[data-page="${pageName}"]`).classList.add("active");
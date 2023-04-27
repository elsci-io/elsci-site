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

// const pageName = document.querySelector('main').dataset.page;
// document.querySelector(`.navigation-list__item[data-page="${pageName}"]`).classList.add("active");

function crossWord(id) {
    document.querySelector(`.word-box[data-id="${id}"] .wrong`).classList.add('strike');
}

function showWord(id) {
    document.querySelector(`.word-box[data-id="${id}"] .correct`).classList.add('visible');
}

for (let id = 1; id <= 7; id++) {
    setTimeout(() => {
        crossWord(id)
    }, id * 2000)
    setTimeout(() => {
        showWord(id)
    }, ((id * 2000) + 2000))
}
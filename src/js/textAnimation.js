function crossWord(id) {
    document.querySelector(`.word-box[data-id="${id}"] .word-box__wrong`).classList.add('strike');
}

function showWord(id) {
    document.querySelector(`.word-box[data-id="${id}"] .word-box__correct`).classList.add('visible');
}

for (let id = 1; id <= 7; id++) {
    setTimeout(() => {
        crossWord(id);
        setTimeout(() => {
            showWord(id)
        }, 2000);
    }, id * 2000)

}
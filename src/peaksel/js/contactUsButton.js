let emailBtns = document.querySelectorAll("[data-email-btn]");
for (let e of emailBtns) {
    e.addEventListener("click", (event) => {
        event.target.textContent = "peaksel@elsci.io";
    });
}
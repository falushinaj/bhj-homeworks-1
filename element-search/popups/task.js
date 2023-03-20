

let showModalMaie = document.getElementById("modal_main");
let showModalSuccess = document.getElementById("modal_success");
let modalClose = document.querySelectorAll(".modal__close");
let showSuccess = document.querySelector(".show-success");

showModalMaie.classList.add("modal_active");

modalClose.forEach(elem => {
    elem.onclick = () => {
        elem.closest(".modal").classList.remove("modal_active")
    }
});

showSuccess.onclick = () => {
        showModalMaie.classList.remove("modal_active");
        showModalSuccess.classList.add("modal_active");
    }

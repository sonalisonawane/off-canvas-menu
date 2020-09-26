let hamburgerEl = document.querySelector(".hamburger")
let contentEl = document.querySelector(".content");
let navEl = document.querySelector(".nav");
let hambarsEl = document.getElementsByTagName("span");


function menuToggler() {
    hamburgerEl.addEventListener("click", function() {
        navEl.classList.toggle("open");
        contentEl.classList.toggle("shift");
        animateHam();

    })

    function animateHam() {
        for (let item of hambarsEl) {
            item.classList.toggle("change")
        }
    }

}

menuToggler();
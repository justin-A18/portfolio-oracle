let nav = document.getElementById("navegation");

let body = document.querySelector("body");

document.getElementById("burger").addEventListener("click", () => {
    nav.classList.toggle("nav-burger-v");

    body.classList.toggle("hidden");

});

AOS.init({
    duration: 1000,
});

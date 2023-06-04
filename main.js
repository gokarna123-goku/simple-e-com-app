//
window.addEventListener("scroll", function () {
    var navbar = document.querySelector("nav");
    var scrollY = window.scrollY;

    if (scrollY >= 30) {
        navbar.classList.add("fixed");
        navbar.style.transition = "0.5s ease-out";
    } else {
        navbar.classList.remove("fixed");
        navbar.style.transition = "0.5s ease-out";
    }
});
  
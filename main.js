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
  

// Get references to the elements
const decrementBtn = document.getElementById("btnDecrement");
const incrementBtn = document.getElementById("btnIncrement");
const counterDisplay = document.getElementById("counterDisplay");
// Set initial counter value
let counter = 0;
counterDisplay.textContent = counter;

// Decrement button click event
decrementBtn.addEventListener("click", () => {
    if (counter > 0) {
        counter--;
        counterDisplay.textContent = counter;
    }
});

// Increment button click event
incrementBtn.addEventListener("click", () => {
    if (counter < 5) {
        counter++;
        counterDisplay.textContent = counter;
    } else {
        alert("Maximum limit reached.");
    }
});

// END
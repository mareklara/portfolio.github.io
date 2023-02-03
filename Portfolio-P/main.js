const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".ul-container");

var navbar = document.querySelector(".nav-section");

hamburguer.addEventListener("click", ()=>{
    hamburguer.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".link").forEach(n => n.addEventListener("click", ()=>{
    hamburguer.classList.remove("active");
    navMenu.classList.remove("active");
}));

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
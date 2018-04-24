window.onscroll = function() {stickFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickFunction() {
  if (window.pageYOffset >= sticky-108) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
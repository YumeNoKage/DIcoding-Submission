// function navbar

let nav = document.getElementById("navigator");
let btnSearch = document.getElementById("btnSearch");
let inputForm = document.getElementById("inputForm");
window.onscroll = function() {
  if (window.pageYOffset > 100) {
    // nav.style.background = "#333333";
    if (window.screen.availWidth < 430) {
      nav.style.background = "rgba(51, 51, 51,0.8)";
    } else {
      nav.style.background = "rgba(51, 51, 51,0.8)";
    }
    inputForm.classList.remove("inputform");
    inputForm.style.borderColor = "rgb(255, 44, 223)";
    btnSearch.setAttribute("src", "./Assets/material/search_gradient.svg");
  } else {
    // nav.style.background = "none";
    if (window.screen.availWidth < 430) {
      nav.style.background = "rgba(51, 51, 51,0.9)";
    } else {
      nav.style.background = "none";
    }
    inputForm.style.borderColor = "rgb(0, 18, 255)";
    inputForm.classList.add("inputform");
    btnSearch.setAttribute("src", "./Assets/material/search_white.svg");
  }
};

// burger
function myBurger() {
  let itemNav = document.getElementById("item-nav");
  let burger = document.getElementById("burger-img");
  if (itemNav.style.display === "block") {
    itemNav.style.display = "none";
    burger.setAttribute("src", "./Assets/material/burger.svg");
  } else {
    itemNav.style.display = "block";
    burger.setAttribute("src", "./Assets/material/burger-gradient.svg");
  }
}

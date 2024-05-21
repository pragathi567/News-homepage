let menuIcon = document.querySelector(".menu");
let closeIcon = document.querySelector(".close");
let navMenu = document.querySelector(".nav-menu");


menuIcon.addEventListener("click",showMenu);
closeIcon.addEventListener("click",closeMenu);

function showMenu(){
    navMenu.classList.remove("hide");
    navMenu.classList.add("show");
}

function closeMenu(){
    navMenu.classList.remove("show");
    navMenu.classList.add("hide");
}
const navSlide = () => {
    const burgerMenu = document.querySelector(".burger-menu");
    const nav = document.querySelector(".header-links");
    // Toggle header-links-active class
    burgerMenu.addEventListener('click', () => {
        nav.classList.toggle('header-links-active');

    // burger-menu Animation
    burgerMenu.classList.toggle("cross-burger-menu");

    });  
    
}

navSlide();
const navHeaderLinks = document.querySelectorAll(".header-links li");
const navLinks = document.querySelectorAll(".header-links a");
const activePage = window.location.pathname;
// Add class to all li elements
navHeaderLinks.forEach(link =>{
    link.classList.add('underline-indicators');
})
// Add class active to an active a element
navLinks.forEach(link => {
    if(link.href.includes(`${activePage}`)){
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
})
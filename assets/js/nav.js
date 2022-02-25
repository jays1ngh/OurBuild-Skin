const navSlide = () => {
    const burgerMenu = document.querySelector(".burger-menu");
    const nav = document.querySelector(".header-links");
    const primaryHeader = document.querySelector(".primary-header");
    
    burgerMenu.addEventListener('click', () => {
        // Toggle header-links-active class
        nav.classList.toggle('header-links-active');

        // Change Primary Header CSS position for mobile nav
        primaryHeader.classList.toggle("primary-header-nav");

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

const currentLocation = document.URL;

navLinks.forEach(link => {
    if (currentLocation === link.href){
        link.classList.add('active');
    }
})
'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [overlay, navCloseBtn, navOpenBtn];

/**
 * close navbar when click on any navbar link
 */

for (let i = 0; i < navbarLinks.length; i++) { navElemArr.push(navbarLinks[i]); }

/**
 * addd event on all elements for toggling navbar
 */

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    elemToggleFunc(navbar);
    elemToggleFunc(overlay);
  });
}



/**
 * header active state
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 400 ? header.classList.add("active")
    : header.classList.remove("active");
}); 


// script.js

let slideIndex = {};

function changeSlides(slideshowId, n) {
    const slides = document.querySelectorAll(`#${slideshowId} .slide`);
    if (!slideIndex[slideshowId]) {
        slideIndex[slideshowId] = 0;
    }
    slideIndex[slideshowId] += n;
    if (slideIndex[slideshowId] >= slides.length) slideIndex[slideshowId] = 0;
    if (slideIndex[slideshowId] < 0) slideIndex[slideshowId] = slides.length - 1;
    
    slides.forEach((slide, index) => {
        slide.style.display = (index === slideIndex[slideshowId]) ? 'block' : 'none';
    });
}

// Initialize slides
document.addEventListener('DOMContentLoaded', () => {
    const slideShows = document.querySelectorAll('.slideshow-container');
    slideShows.forEach(show => {
        const slides = show.querySelectorAll('.slide');
        slides.forEach((slide, index) => {
            slide.style.display = (index === 0) ? 'block' : 'none';
        });

        setInterval(() => {
            changeSlides(show.id, 1);
        }, 4000); // Change image every 4 seconds
    });
});

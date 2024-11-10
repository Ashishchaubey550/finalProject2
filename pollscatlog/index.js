// gsap.from("#product_heading",{
//     opacity: 0,
//     y:30,
//     delay: 0.3,
//     duration: 0.5,
//     scale: 0.2
//   })
//   gsap.from("#product_heading1",{
//     opacity: 0,
//     y:30,
//     delay: 3,
//     duration: 0.5,
//     scale: 0.2
//   })

import data1 from './data.js';

const cardsContainer = document.getElementById('cards-container');
const filterButtons = document.querySelectorAll('.filter-button');

function displayCards(data) {
    cardsContainer.innerHTML = ''; // Clear the container

    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${item.imageUrl}" alt="Image of ${item['No'] || item['CAT REF No']}">
        `;
        cardsContainer.appendChild(card);
    });
}


// Initial display of all cards
displayCards(data1);

// Filter functionality
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const category = button.getAttribute('data-category');
        let filteredData;

        if (category === 'all') {
            filteredData = data1; // Show all items
        } else {
            // Filter items based on the "Name" property
            filteredData = data1.filter(item => item.Name === category);
        }

        displayCards(filteredData); // Assuming this function displays the filtered data
    });
});





// =======================================Slider banner===================================

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const nextButton = document.querySelector(".arrow.right");
const prevButton = document.querySelector(".arrow.left");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Event listeners for buttons
nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

// Automatic slide change every 3 seconds
setInterval(nextSlide, 7000);

// Initialize the first slide as visible
showSlide(currentSlide);























// // Loader functionality (if used)
// const loader = document.querySelector("#preloader");
// const mainContent = document.querySelector("#main");

// // Loader visibility management
// window.addEventListener('load', function() {
//     if (loader) {
//         loader.style.top = "-100%"; // Hide loader
//     }
//     if (mainContent) {
//         mainContent.classList.add('visible'); // Show the main content
//     } else {
//         console.error("#main element not found.");
//     }
// });
// gsap.from("#product_headings",{
//     opacity: 0,
//     delay: 0.3,
//     duration: 0.5,
//     scale: 0.2
//   })
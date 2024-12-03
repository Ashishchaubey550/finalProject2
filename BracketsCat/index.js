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
        // Remove 'active' class from all buttons and add it to the clicked button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Get the category from the clicked button's data attribute
        const category = button.getAttribute('data-category');
        let filteredData;

        // If no category is selected or it's empty, show all items
        if (!category || category === '') {
            filteredData = data1; // Display all items
        } else {
            // Filter items based on the selected category
            filteredData = data1.filter(item => item.Name === category);
        }

        // Display the filtered data
        displayCards(filteredData);
    });
});

// Set default category filter when the page loads (if no filter is active)
document.addEventListener('DOMContentLoaded', () => {
    // Display all items by default on page load
    displayCards(data1);

    // Optionally add the 'active' class to a default button if desired
    const defaultButton = filterButtons.find(button => button.getAttribute('data-category') === '');
    if (defaultButton) {
        defaultButton.classList.add('active');
    }
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





document.getElementById('gototop').addEventListener('click', function() {
    const topNav = document.getElementById('top');
    topNav.scrollIntoView({
      behavior: 'smooth',  // Smooth scroll
      block: 'start'       // Align at the top of the screen
    });
  });
  document.addEventListener('DOMContentLoaded', function () {
      let menuList = document.getElementById('nav-part2');
      menuList.style.maxHeight = "0px"; // Start with the menu collapsed
    
      function toggleMenu(){
        if (menuList.style.maxHeight === "0px") {
          menuList.style.maxHeight = "350px"; // Expand the menu
        } else {
          menuList.style.maxHeight = "0px"; // Collapse the menu
        }
      }
    
      // Assign the toggleMenu function to the click event of the menu icon
      document.querySelector('.menu-icon i').addEventListener('click', toggleMenu);
    });
    

















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
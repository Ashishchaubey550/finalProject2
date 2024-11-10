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
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
const filterButtons = document.querySelectorAll('.filter-button'); // Ensure you define filterButtons

// Function to display cards
function displayCards(data) {
    cardsContainer.innerHTML = ''; // Clear the container

    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${item.imageUrl}" alt="Image of ${item['CAT REF No']}">
            <div class="card-header">
                <h2>CAT REF No: ${item.No}</h2>
                <p>Size: ${item.size}</p>
            </div>
            <div class="card-details">
                <p>TSL: ${item.TSL}</p>
            </div>
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

        console.log(`Filtering category: ${category}`); // Log selected category

        if (category === 'low-wattage') {
            filteredData = data1.filter(item => item.wattage && item.wattage <= 1980);
        } else if (category === 'medium-wattage') {
            filteredData = data1.filter(item => item.wattage && item.wattage > 5 && item.wattage <= 8);
        } else if (category === 'high-wattage') {
            filteredData = data1.filter(item => item.wattage && item.wattage > 8);
        } else {
            filteredData = data1; // Show all for "All" category
        }

        console.log(`Filtered data:`, filteredData); // Log filtered data
        displayCards(filteredData);
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
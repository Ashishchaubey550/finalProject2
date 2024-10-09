import data from './data.js';
import images from './images.js'; // Ensure images.js is correctly imported

// Function to create slides for a specific Swiper instance
function createSlides(swiperClass, sliderData) {
    const swiperWrapper = document.querySelector(`.${swiperClass} .swiper-wrapper`);

    // Clear any existing slides
    swiperWrapper.innerHTML = '';

    // Dynamically generate the slides
    sliderData.forEach(card => {
        const slide = document.createElement("div");
        slide.classList.add("swiper-slide");

        slide.innerHTML = `
        <div class="red-section">
            <img src="${card.image}" alt="${card.heading}">
        </div>
        <div class="blue-section">
            <h3>${card.heading}</h3>
        <table>
            <tr>
                <th>Cat No.</th>
                <th>Wattage</th>
                <th>Height</th>
                <th>MRP</th>
            </tr>
            <tr>
                <td>${card.catNo}</td>
                <td>${card.wattage}</td>
                <td>${card.height}</td>
                <td>${card.mrp}</td>
            </tr>
        </table>
        </div>
    `;

        swiperWrapper.appendChild(slide);
    });

    // Initialize Swiper for this specific instance
    const swiperInstance = new Swiper(`.${swiperClass}`, {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
            el: `.${swiperClass} .swiper-pagination`,
            clickable: true,
        },
        navigation: { // Enable navigation buttons
            nextEl: `.${swiperClass} .swiper-button-next`,
            prevEl: `.${swiperClass} .swiper-button-prev`,
        },
        keyboard: {
            enabled: true, // Enable keyboard controls
            onlyInViewport: true,
        },
    });

    // OPTIONAL: Create an Intersection Observer to monitor visibility, if necessary
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                swiperInstance.keyboard.enable();
            }
        });
    }, {
        threshold: 0.1
    });

    observer.observe(swiperWrapper);
}

// Data for each slider
const slider1Data = data;  // All items for slider 1
const slider2Data = images; // Use the images data for slider 2
const slider3Data = data.slice(0, 5); // First 5 items for slider 3

// Create slides for each Swiper instance
createSlides("mySwiper1", slider1Data); // First slider with data
createSlides("mySwiper2", slider2Data); // Second slider with images
createSlides("mySwiper3", slider3Data); // Third slider with more data


// Loader functionality (if used)
const loader = document.querySelector("#preloader");
const mainContent = document.querySelector("#main");

// Loader visibility management
window.addEventListener('load', function() {
    if (loader) {
        loader.style.top = "-100%"; // Hide loader
    }
    if (mainContent) {
        mainContent.classList.add('visible'); // Show the main content
    } else {
        console.error("#main element not found.");
    }
});
gsap.from("#product_headings",{
    opacity: 0,
    delay: 0.3,
    duration: 0.5,
    scale: 0.2
  })
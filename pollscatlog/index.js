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











// import images from './images.js'; // Ensure images.js is correctly imported

// // Function to create slides for a specific Swiper instance
// function createSlides(swiperClass, sliderData) {
//     const swiperContainer = document.querySelector(`.${swiperClass}`);
//     const swiperWrapper = swiperContainer.querySelector('.swiper-wrapper');

//     // Clear any existing slides
//     swiperWrapper.innerHTML = '';

//     // Dynamically generate the slides
//     sliderData.forEach(card => {
//         const slide = document.createElement("div");
//         slide.classList.add("swiper-slide");

//         slide.innerHTML = `
//         <div class="red-section">
//             <img src="${card.image}" alt="${card.heading}">
//         </div>
//         <div class="blue-section">
//             <h3>${card.heading}</h3>
//             <table>
//                 <tr>
//                     <th>Cat No.</th>
//                     <th>Wattage</th>
//                     <th>Height</th>
//                     <th>MRP</th>
//                 </tr>
//                 <tr>
//                     <td>${card.catNo}</td>
//                     <td>${card.wattage}</td>
//                     <td>${card.height}</td>
//                     <td>${card.mrp}</td>
//                 </tr>
//             </table>
//         </div>
//         `;

//         swiperWrapper.appendChild(slide);
//     });
// }













import data1 from './data.js'; // Data for the first Swiper
import data2 from './images.js'; // Data for the second Swiper (different data)

// First Swiper Initialization
var swiper1 = new Swiper(".swiper1", {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination1",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next1",
    prevEl: ".swiper-button-prev1",
  },
});

// Second Swiper Initialization
var swiper2 = new Swiper(".swiper2", {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination2",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
});

// Function to populate the first Swiper
function populateSwiper1() {
  const swiperWrapper1 = document.getElementById('swiper-wrapper1');

  data1.forEach((item) => {
    const slideDiv = document.createElement('div');
    slideDiv.classList.add('swiper-slide');

    slideDiv.innerHTML = `
      <div class="card">
        <img src="${item.imageUrl}" alt="Product Image">
        <div class="card-info">
          <p>${item.code}</p>
          <p>${item.wattage} Watt</p>
        </div>
      </div>
    `;

    swiperWrapper1.appendChild(slideDiv);
  });

  swiper1.update(); // Reinitialize Swiper after adding slides
}

// Function to populate the second Swiper
function populateSwiper2() {
  const swiperWrapper2 = document.getElementById('swiper-wrapper2');

  data2.forEach((item) => {
    const slideDiv = document.createElement('div');
    slideDiv.classList.add('swiper-slide');

    slideDiv.innerHTML = `
      <div class="card">
        <img src="${item.imageUrl}" alt="Product Image">
        <div class="card-info">
          <p>${item.code}</p>
          <p>${item.wattage} Watt</p>
        </div>
      </div>
    `;

    swiperWrapper2.appendChild(slideDiv);
  });

  swiper2.update(); // Reinitialize Swiper after adding slides
}

// Call the functions to populate both Swipers
populateSwiper1();
populateSwiper2();



















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
var loader = document.querySelector("#preloader");
var mainContent = document.querySelector("#main");

// Use the window onload event to hide the preloader when all content (including images) is fully loaded
window.addEventListener('load', function() {
    loader.style.top = "-100%";
    mainContent.classList.add('visible'); // Show the main content
});
// document.addEventListener("DOMContentLoaded", function() {
//     gsap.from("#polls_img", {
//         opacity: 1,
//         duration: 2,
//         y: 1000,
//         ease: "bounce.out",
//     });
//     gsap.from("#bollards_img", {
//         opacity: 1,
//         duration: 2,
//         x: 1000,
//         ease: "bounce.out",
//         delay: 1.9,
//         stagger: 2,
//     });
// });
window.addEventListener('resize', function() {
    const herosection = document.getElementById('herosection');
    if (window.innerWidth < 768) {
        herosection.style.height = 'auto'; // Adjust height for mobile
    }
});


let menuList = document.getElementById('nav-part2');
menuList.style.maxHeight = "0px"; // Start with the menu collapsed

function toggleMenu() {
  if (menuList.style.maxHeight === "0px") {
    menuList.style.maxHeight = "300px"; // Expand the menu
  } else {
    menuList.style.maxHeight = "0px"; // Collapse the menu
  }
}
// GO to top

document.getElementById('gototop').addEventListener('click', function() {
  const topNav = document.getElementById('top');
  topNav.scrollIntoView({
    behavior: 'smooth',  // Smooth scroll
    block: 'start'       // Align at the top of the screen
  });
});
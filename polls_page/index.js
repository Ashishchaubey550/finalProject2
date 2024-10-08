document.addEventListener("DOMContentLoaded", function() {
    gsap.from("#polls_img", {
        opacity: 1,
        duration: 2,
        y: 1000,
        ease: "bounce.out",
    });
    gsap.from("#bollards_img", {
        opacity: 1,
        duration: 2,
        x: 1000,
        ease: "bounce.out",
        delay: 1.9,
        stagger: 2,
    });
});

var loader = document.querySelector("#preloader");
var mainContent = document.querySelector("#main");

// Use the window onload event to hide the preloader when all content (including images) is fully loaded
window.addEventListener('load', function() {
    loader.style.top = "-100%";
    mainContent.classList.add('visible'); // Show the main content
});

window.addEventListener('resize', function() {
    const herosection = document.getElementById('herosection');
    if (window.innerWidth < 768) {
        herosection.style.height = 'auto'; // Adjust height for mobile
    }
});

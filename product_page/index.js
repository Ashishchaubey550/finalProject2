var loader = document.querySelector("#preloader");
var mainContent = document.querySelector("#main");

// Use the window onload event to hide the preloader when all content (including images) is fully loaded
window.addEventListener('load', function() {
    loader.style.top = "-100%";
    mainContent.classList.add('visible'); // Show the main content
});



// var loader = document.querySelector("#preloader");
// setTimeout(function() {
//     loader.style.top = "-100%"
// },3500)
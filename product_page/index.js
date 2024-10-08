var loader = document.querySelector("#preloader");
var mainContent = document.querySelector("#main");

setTimeout(function() {
    loader.style.top = "-100%";
    mainContent.classList.add('visible'); // Show the main content
}, 5000);



// var loader = document.querySelector("#preloader");
// setTimeout(function() {
//     loader.style.top = "-100%"
// },3500)
// var videoscon = document.querySelector("#video-container")
// var product_view = document.querySelector("#view-product") 

//     videoscon.addEventListener("mouseenter", function() {
//         gsap.to(product_view,{
//             scale:1,
//             opacity:1
//         })
        
//     });
//     videoscon.addEventListener("mouseleave", function() {
//         gsap.to(product_view,{
//             scale:0,
//             opacity:0
//         })
        
//     });
//     videoscon.addEventListener("mousemove",function(dets){
//         gsap.to(product_view,{
//             left:dets.x-50,
//             top:dets.y-30
//         })
//     })



// Get the elements
// Get the elements
var loader = document.querySelector("#preloader");
var mainContent = document.querySelector("#main");
var video = document.querySelector("video");

// After 6 seconds, hide the preloader and show the main content
setTimeout(function() {
    loader.classList.add('hide'); // Hide the preloader
    mainContent.classList.add('visible'); // Show the main content

    // Restart the video from the beginning
    video.currentTime = 0;
    video.play();
}, 6500);
    
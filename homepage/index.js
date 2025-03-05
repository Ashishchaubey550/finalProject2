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
var loader = document.querySelector("#preloader");
var mainContent = document.querySelector("#main");
var video = document.querySelector("#background-video");
var playButton = document.querySelector("#play-button");

setTimeout(function() {
    loader.style.top = "-100%";
    loader.style.transition = "top 1s ease-in";
    loader.style.display = "none"; // Hide preloader
    mainContent.classList.add('visible');
    video.currentTime = 0; // Restart video
    video.play();
}, 6500);

// Fallback for iOS autoplay issues
video.addEventListener('loadeddata', function() {
    if (video.paused) {
        playButton.style.display = 'block';
    }
});

playButton.addEventListener('click', function() {
    video.play();
    playButton.style.display = 'none';
});
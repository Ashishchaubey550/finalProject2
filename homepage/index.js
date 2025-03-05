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



var loader = document.querySelector("#preloader");
var mainContent = document.querySelector("#main");
var video = document.querySelector("video");

// Ensure video is loaded before playing
video.addEventListener('loadeddata', function() {
    setTimeout(function() {
        loader.style.top = "-100%";
        loader.style.transition = "top 1s ease-in";
        
        // Remove preloader from DOM after animation
        loader.addEventListener('transitionend', function() {
            loader.remove();
        });

        mainContent.classList.add('visible');
        video.currentTime = 0; // Restart video
        video.play().catch(error => {
            console.error("Video autoplay was prevented:", error);
            // Handle the error, e.g., show a play button to the user
        });
    }, 6500); // Adjust the delay as needed
});

// Fallback for browsers that block autoplay
video.addEventListener('play', function() {
    console.log("Video is playing");
});

video.addEventListener('pause', function() {
    console.log("Video is paused");
    // Optionally, show a play button to the user
});
document.addEventListener('click', function() {
    video.play();
});
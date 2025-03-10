var loader = document.querySelector("#preloader");
var mainContent = document.querySelector("#main");
var video = document.querySelector("video");

// Ensure video is loaded before playing
video.addEventListener('loadeddata', function () {
    setTimeout(function () {
        loader.style.top = "-100%";
        loader.style.transition = "top 1s ease-in";

        // Remove preloader from DOM after animation
        loader.addEventListener('transitionend', function () {
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
video.addEventListener('play', function () {
    console.log("Video is playing");
});

video.addEventListener('pause', function () {
    console.log("Video is paused");
    // Optionally, show a play button to the user
});

// Unmute and play video on user interaction
document.addEventListener('click', function () {
    video.muted = false; // Unmute the video
    video.play(); // Play the video
});
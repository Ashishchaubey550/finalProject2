document.addEventListener('DOMContentLoaded', () => {
    const loader = document.querySelector("#preloader");
    const mainContent = document.querySelector("#main");
    const video = document.querySelector("video");
    let videoReady = false;

    // Initialize video properties
    video.muted = true;
    video.loop = true;
    video.playsInline = true;

    // Preloader timeout (6500ms)
    const preloaderTimeout = setTimeout(() => {
        hidePreloader();
        initializeVideoPlayback();
    }, 6500);

    function hidePreloader() {
        loader.style.transition = "opacity 1s ease-out";
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.remove();
            mainContent.classList.add('visible');
        }, 1000);
    }

    function initializeVideoPlayback() {
        // Always reset to beginning
        video.currentTime = 0;
        
        const playPromise = video.play();
        playPromise.catch(error => {
            handleAutoplayError();
        });
    }

    function handleAutoplayError() {
        const playButton = createPlayButton();
        document.body.appendChild(playButton);
        
        playButton.addEventListener('click', () => {
            video.currentTime = 0;
            video.play().then(() => {
                playButton.remove();
            }).catch(console.error);
        });
    }

    // function createPlayButton() {
    //     const btn = document.createElement('div');
    //     btn.innerHTML = 'Tap to Start';
    //     btn.style.cssText = `
    //         position: fixed;
    //         top: 50%;
    //         left: 50%;
    //         transform: translate(-50%, -50%);
    //         padding: 10px 25px;
    //         background: rgba(0, 0, 0, 0.8);
    //         color: #fff;
    //         cursor: pointer;
    //         z-index: 1000;
    //         border-radius: 30px;
    //         font-size: 1.2rem;
    //         font-family: Arial, sans-serif;
    //         box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    //     `;
    //     return btn;
    // }

    // Video readiness check
    video.addEventListener('loadedmetadata', () => {
        videoReady = true;
    });

    // Fallback if video metadata takes too long
    setTimeout(() => {
        if (!videoReady) {
            console.warn('Video metadata not loaded yet');
            video.load();
        }
    }, 5000);

    // Unmute functionality
    document.addEventListener('click', () => {
        if (video.muted) {
            video.muted = false;
        }
    });

    // Optional: Reset video on page visibility change
    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') {
            video.currentTime = 0;
            video.play();
        }
    });
});
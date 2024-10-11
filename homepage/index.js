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
    
    setTimeout(function() {
        loader.style.top = "-100%";
        mainContent.classList.add('visible'); // Show the main content
    }, 10000);
    
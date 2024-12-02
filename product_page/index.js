
gsap.from("#product_heading",{
    opacity: 0,
    y:30,
    delay: 0.3,
    duration: 0.5,
    scale: 0.2
  })



// var loader = document.querySelector("#preloader");
// setTimeout(function() {
//     loader.style.top = "-100%"
// },3500)


// responsive navbar

// let menuList = document.getElementById('nav-part2'); // Removed '#'
// menuList.style.maxHeight = "0px"; // Start with the menu collapsed

// function menu_button() {
//   if (menuList.style.maxHeight === "0px") {
//     menuList.style.maxHeight = "300px"; // Expand menu
//   } else {
//     menuList.style.maxHeight = "0px"; // Collapse menu
//   }
// }

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

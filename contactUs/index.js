gsap.from("#product_heading",{
    opacity: 0,
    y:30,
    delay: 0.3,
    duration: 0.5,
    scale: 0.2
  })

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
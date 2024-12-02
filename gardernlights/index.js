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


window.addEventListener('resize', function() {
    const herosection = document.getElementById('herosection');
    if (window.innerWidth < 768) {
        herosection.style.height = 'auto'; // Adjust height for mobile
    }
});


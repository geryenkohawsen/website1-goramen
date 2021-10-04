const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarNav')
const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle:false})

function myFunction(x) {
    if (x.matches) { // If media query matches
        navLinks.forEach((l) => {
            l.addEventListener('click', () => { bsCollapse.toggle() })
        });
    } 
  }
  
  var x = window.matchMedia("(max-width: 991px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes

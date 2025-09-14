// menu bar for nav bar
const menuBar = document.getElementById('menu-bar');
const navigationOnMobile = document.querySelector('nav .navigation-on-mobile');
menuBar.addEventListener('click', function () {
    this.classList.toggle('open');
    navigationOnMobile.classList.toggle('is-visible')
})
// // menu bar for nav bar

// sticky navbar after 200px
const navbar = document.getElementById('navbar')
window.onscroll = function () {
    if (window.scrollY > 226) {
        document.querySelector('#navbar div').style.height = '80px';
        navbar.style.boxShadow = '0px 0px 10px rgba(0,0,0,0.15)';
        // console.log('greater than 200px');
        document.querySelector('nav .navigation-on-mobile').style.top = '80px';
    } else {
        document.querySelector('#navbar div').style.height = '100px';
        navbar.style.boxShadow = 'none';
        document.querySelector('nav .navigation-on-mobile').style.top = '100px'
    }
}
// // sticky navbar after 200px

// AOS Animation
AOS.init();
// // AOS Animation

setTimeout(function () {
    document.querySelector('.loading-page').remove()
}, 3000);

// active link on scroll
const sections = document.querySelectorAll('section, main, header');
const links = document.querySelectorAll('.nav-link');

// Highlight active link based on hash
function setActiveLink(hash) {
  links.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === hash) {
      link.classList.add("active");
    }
  });
}
// Update active link on scroll
function onScroll() {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80; // adjust for navbar
    const sectionHeight = section.offsetHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = `#${section.id}`;
    }
  });

  if (current && window.location.hash !== current) {
    history.replaceState(null, "", current); // update URL without reload
    setActiveLink(current);
  }
}
// Click behavior
links.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const hash = link.getAttribute("href");
    document.querySelector(hash).scrollIntoView({ behavior: "smooth" });
    history.pushState(null, "", hash);
    setActiveLink(hash);
  });
});

// Scroll listener
window.addEventListener("scroll", onScroll);

// Handle back/forward buttons
window.addEventListener("popstate", () => {
  setActiveLink(window.location.hash || "#home");
});

// Initial load
setActiveLink(window.location.hash || "#home");
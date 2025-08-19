// menu bar for nav bar
const menuBar = document.getElementById('menu-bar');
menuBar.addEventListener('click', function () {
    this.classList.toggle('open')
})
// // menu bar for nav bar

// sticky navbar after 200px
const navbar = document.getElementById('navbar')
window.onscroll = function () {
    if (window.scrollY > 226) {
        document.querySelector('#navbar div').style.height = '80px';
        navbar.style.boxShadow = '0px 0px 10px rgba(0,0,0,0.15)';
        // console.log('greater than 200px');
    }
    else {
        document.querySelector('#navbar div').style.height = '100px';
        navbar.style.boxShadow = 'none';
    }
}
// // sticky navbar after 200px
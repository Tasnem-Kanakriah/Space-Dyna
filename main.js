// menu bar for nav bar
const menuBar = document.getElementById('menu-bar');
menuBar.addEventListener('click', function () {
    this.classList.toggle('open')
})
// // menu bar for nav bar

// sticky navbar after 200px
window.onscroll = function () {
    if (window.scrollY > 226) {
        document.getElementById('navbar').style.position = 'sticky';
        document.getElementById('navbar').style.top = 0;
        // console.log('greater than 200px');
    }
    else {
        document.getElementById('navbar').style.position = 'static';
    }
}
// // sticky navbar after 200px
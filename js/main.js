// const slides = document.querySelectorAll('.slide');
// const next = document.querySelector('#next');
// const prev = document.querySelector('#prev');
// const auto = false;
// const intervalTime = 5000;
// let slideInterval;

// const nextSlide = () => {
//     const current = document.querySelector('.current');
//     current.classList.remove('current');
//     // check for next slide
//     if(current.nextElementSibling) {
//         // add current to next sibling
//         current.nextElementSibling.classList.add('current');
//     }
//     else {
//         // Add current to start
//         slides[0].classList.add('current');
//     }
//     // setTimeout(() => current.classList.remove('current'), 200);
// }

// const prevSlide = () => {
//     const current = document.querySelector('.current');
//     current.classList.remove('current');
//     // check for prev slide
//     if(current.previousElementSibling) {
//         // add current to prev sibling
//         current.previousElementSibling.classList.add('current');
//     }
//     else {
//         // Add current to last
//         slides[slides.length -1].classList.add('current');
//     }
//     // setTimeout(() => current.classList.remove('current'), 200);
// }

// // Button events
// next.addEventListener('click', e => {
//     nextSlide();
//     if(auto) {
//         clearInterval(slideInterval);
//         slideInterval = setInterval(nextSlide, intervalTime);
//     }
// });
// prev.addEventListener('click', e => {
//     prevSlide();
//     if(auto) {
//         clearInterval(slideInterval);
//         slideInterval = setInterval(nextSlide, intervalTime);
//     }
// });

// // auto slide
// if(auto) {
//     // run next slide at interval time
//     slideInterval = setInterval(nextSlide, intervalTime);
// }

var allImages = "";
var gallery = document.getElementById("photos");

for (var i = 0; i < 27; i++) {
  var e = document.createElement("img");
  e.src = `gallery/${i}.jpg`;

  gallery.appendChild(e);
}

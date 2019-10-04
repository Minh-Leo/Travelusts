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

let gallery = document.getElementById("photos");
let modal = document.getElementById("modal");
let modalClose = document.getElementById("modal-close");
let modalImg = document.getElementById("modal-img");

for (let i = 0; i < 27; i++) {
  let e = document.createElement("img");
  e.src = `gallery/thumb/${i}.jpg`;
  e.setAttribute("class", "gallery_thumb");

  e.onclick = function() {
    modalImg.src = `gallery/${i}.jpg`;
    modal.setAttribute("style", "display: block; visibility: visible;");
  };

  gallery.appendChild(e);
}

modalClose.onclick = function() {
  modal.setAttribute("style", "display: none; visibility: hidden;");
};

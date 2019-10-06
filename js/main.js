let gallery = document.getElementById("photos");
let modal = document.getElementById("modal");
let modalClose = document.getElementById("modal-close");
let modalImg = document.getElementById("modal-img");

let menu = document.getElementById("burger");
let burgerMenu = document.getElementById("burgerMenu");

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

menu.onclick = () => {
  burgerMenu.classList.toggle("visible");
  menu.classList.toggle("close");
};

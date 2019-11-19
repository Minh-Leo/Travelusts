let gallery = document.getElementById("photos");
let modal = document.getElementById("modal");
let modalClose = document.getElementById("modal-close");
let modalImg = document.getElementById("modal-img");

let menu = document.getElementById("burger");
let burgerMenu = document.getElementById("burgerMenu");
let sidebarTitle = document.getElementById("sidebar_title");

// Gallery
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

// close modal X button
modalClose.onclick = function() {
  modal.setAttribute("style", "display: none; visibility: hidden;");
};

menu.onclick = () => {
  burgerMenu.classList.toggle("visible");
  menu.classList.toggle("close");
};

// Story section modal
let card1 = document.getElementById("card-1");
let modalSt = document.getElementById("modal-story");
let modalStClose = document.getElementById("modal-story-close");

let modalStTitle = document.getElementById("modal-story-title");
let modalStText = document.getElementById("modal-story-text");
let modalStImg = document.getElementById("modal-story-img");

var getStory = n => {
  // modalStImg.src = "gallery/thumb/ex.jpg";
  modalSt.setAttribute("style", "display: block; visibility: visible;");
  modalStTitle.innerText = stories[n].title;
  modalStText.innerHTML = stories[n].text;
  modalStText.style.fontStyle = "italic";
  for (let i = 0; i < stories[n].img.length; i++) {
    let pict = document.createElement("img");
    pict.src = `stories-img/${stories[n].id}/${i}.jpg`;

    modalStImg.appendChild(pict);
  }
};
// card1.onclick = getStory(0);

modalStClose.onclick = function() {
  modalSt.setAttribute("style", "display: none; visibility: hidden;");
  modalStTitle.innerText = "";
  modalStText.innerText = "";
  while (modalStImg.firstChild) {
    modalStImg.firstChild.remove();
  }
};

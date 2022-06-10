let myImg = Array.from(document.querySelectorAll("img"));
let lightboxcontainer = document.querySelector(".lightboxcontainer");
let lightboxitem = document.querySelector(".lightboxitem");
let closeBtn = document.querySelector(".fa-circle-xmark");
let prevBtn = document.querySelector(".fa-circle-left");
let nextBtn = document.querySelector(".fa-circle-right");
let currentIndex = 0;

for (let i = 0; i < myImg.length; i++) {
  myImg[i].addEventListener("click", function (event) {
    lightboxitem.setAttribute(
      "style",
      `background-image: url(${event.target.src})`
    );
    lightboxcontainer.classList.replace("d-none", "d-flex");
    currentIndex = myImg.indexOf(event.target);
  });
}

// using mouse events

// next slide

function nextSlide() {
  currentIndex++;
  if (currentIndex == myImg.length) {
    currentIndex = 0;
  }
  lightboxitem.setAttribute(
    "style",
    `background-image: url(${myImg[currentIndex].src})`
  );
}
nextBtn.addEventListener("click", nextSlide);

// previous slide

function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = myImg.length - 1;
  }
  lightboxitem.setAttribute(
    "style",
    `background-image: url(${myImg[currentIndex].src})`
  );
}
prevBtn.addEventListener("click", prevSlide);

// close slide

function closeBox() {
  lightboxcontainer.classList.replace("d-flex", "d-none");
}
closeBtn.addEventListener("click", closeBox);

// using Arrow and esc Keys

document.addEventListener("keyup", function (event) {
  if (lightboxcontainer.classList.contains("d-flex")) {
    if (event.key == "ArrowRight") {
      nextSlide();
    } else if (event.key == "ArrowLeft") {
      prevSlide();
    } else if (event.key == "Escape") {
      closeBox();
    }
  }
});

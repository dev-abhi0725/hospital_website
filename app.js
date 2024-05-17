// function togglePopup(){
//     document.getElementById("popup-1").classList.toggle("active");
// }
function togglePopup(event) {
  var miniBox = event.currentTarget;
  var popup = miniBox.querySelector(".popup");
  popup.classList.toggle("active");
}

var miniBoxes = document.querySelectorAll(".mini-box");
miniBoxes.forEach(function (miniBox) {
  miniBox.addEventListener("click", togglePopup);
});

// For Result Carousel
let currentIndex = 0;
const items = document.querySelectorAll(".my-carousel-item");
const totalItems = items.length;

function showSlide(index) {
  const newIndex = index % totalItems;
  const offset = -newIndex * 100;
  document.querySelector(
    ".my-carousel-inner"
  ).style.transform = `translateX(${offset}%)`;
  document.querySelector(".my-carousel-item.active").classList.remove("active");
  items[newIndex].classList.add("active");
  currentIndex = newIndex;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide((currentIndex - 1 + totalItems) % totalItems);
}

// Autoplay functionality
setInterval(nextSlide, 2000); // Change slide every 2 seconds

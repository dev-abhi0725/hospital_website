// function togglePopup(){
//     document.getElementById("popup-1").classList.toggle("active");
// }
function togglePopup(event) {
    var miniBox = event.currentTarget;
    var popup = miniBox.querySelector(".popup");
    popup.classList.toggle("active");
  }
  
  var miniBoxes = document.querySelectorAll(".mini-box");
  miniBoxes.forEach(function(miniBox) {
    miniBox.addEventListener("click", togglePopup);
  });

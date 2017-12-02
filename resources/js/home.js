/*  ***************************************************
                Display modal post form
***************************************************  */


var modal = document.getElementById("modal-container");

var cameraBtn = document.getElementById("camera-btn");
var cameraBtnNav = document.getElementById("camera-btn-nav");

var closeBtn = document.getElementsByClassName("close")[0];

cameraBtn.onclick = function() {
    modal.style.display = "block";
}
cameraBtnNav.onclick = function() {
    modal.style.display = "block";
}

closeBtn.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
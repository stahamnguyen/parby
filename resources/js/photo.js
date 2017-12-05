/*  ***************************************************
                Display modal post form
***************************************************  */


const modal = document.getElementById("modal-container");
const addAlbumModal = document.getElementById("modal-addAlbum");
const inputCaption = document.getElementById("input-caption");

const inputImg = document.getElementById("uploadImg");


const closeBtn = document.getElementsByClassName("close")[0];

let image = document.getElementById("modal-input").getElementsByTagName("img")[0];


inputImg.addEventListener("change", (event) => {

    console.log("hi");

    var file = event.target.files[0];

    var reader = new FileReader();

    // Closure to capture the file information.
    reader.onload = (event) => {
        image.src = event.target.result;
    };

    // Read in the image file as a data URL.
    reader.readAsDataURL(file);

    modal.style.display = "block";
});


/* Close Photo Modal */

function closeModal() {
    modal.style.display = "none";
    inputCaption.value = "";
    inputImg.value = "";
    image.src = "";
}

closeBtn.onclick = function() {
    closeModal();
}
window.onclick = function(event) {
    if (event.target === modal) {
        closeModal();
    }
}


// Get the modal
var imgModal = document.getElementById('imgModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('img1');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    imgModal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[1];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    imgModal.style.display = "none";
}

/*  ***************************************************
                Display modal form
***************************************************  */
const addAlbumModal = document.getElementById("modal-addAlbum");

const inputAlbum = document.getElementById("addAlbum");
const closeAlbum = document.getElementById("closeAlbumModal");
let albumCover = document.getElementById("modal-input").getElementsByTagName("img")[0];

/* Create Album */

inputAlbum.addEventListener("change", (event) => {

    console.log("hello");

    var file = event.target.files[0];

    var reader = new FileReader();

    // Closure to capture the file information.
    reader.onload = (event) => {
        albumCover.src = event.target.result;
    };

    // Read in the image file as a data URL.
    reader.readAsDataURL(file);

    addAlbumModal.style.display = "block";
});


/* Close Album Modal */
closeAlbum.onclick = function() {
    addAlbumModal.style.display = "none";
}

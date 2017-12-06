/*  ***************************************************
                Display modal post form
***************************************************  */


const modal = document.getElementById("modal-container");
const inputCaption = document.getElementById("input-caption");

const inputImgButton = document.getElementById("addImage");
const inputImg = document.getElementById("uploadImg");

const closeBtn = document.getElementsByClassName("close")[0];

let image = document.getElementById("modal-input").getElementsByTagName("img")[0];

/*  ***************************************************
                Display modal from nav button
***************************************************  */
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

/*  ***************************************************
                Display modal from button
***************************************************  */

inputImgButton.addEventListener("change", (event) => {

    console.log("moikka");

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

/*  ***************************************************
                    New Photo Added To Screen
***************************************************  */


const postBtn = document.getElementById("post-btn");
const showcase = document.getElementById("showcase");

postBtn.addEventListener("click", () => {

    const postHtml = '<li>\
                        <figure class="album-photo">\
                          <img src="'+ image.src + '" id="img1">\
                        </figure>\
                      </li>'


    showcase.innerHTML = postHtml + showcase.innerHTML;
    closeModal();
});


/*  ***************************************************
                Display Picture modal
***************************************************  */
const imgModal = document.getElementById('imgModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
const img = document.getElementById('img1');
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");
img.onclick = function(){
    imgModal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[1];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    imgModal.style.display = "none";
}

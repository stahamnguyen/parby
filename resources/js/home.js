/*  ***************************************************
                Display modal post form
***************************************************  */


const modal = document.getElementById("modal-container");
const inputCaption = document.getElementById("input-caption");

const inputImg = document.getElementById("uploadImg");

const closeBtn = document.getElementsByClassName("close")[0];

let image = document.getElementById("modal-input").getElementsByTagName("img")[0];

inputImg.addEventListener("change", (event) => {
    
    let file = event.target.files[0];

    let reader = new FileReader();

    // Closure to capture the file information.
    reader.onload = (event) => {
        image.src = event.target.result;
    };

    // Read in the image file as a data URL.
    reader.readAsDataURL(file);

    modal.style.display = "block";
});

function closeModal() {
    modal.style.display = "none";
    inputCaption.value = "";
    inputImg.value = "";
    image.src = "";
}

closeBtn.onclick = function() {
    closeModal();
};
window.onclick = function(event) {
    if (event.target === modal) {
        closeModal();
    }
};


/*  ***************************************************
                    Post image
***************************************************  */





/*  ***************************************************
                Display comment
***************************************************  */


let commentBtnArray = [...document.getElementsByClassName("comment-btn")];

commentBtnArray.forEach(element => {
    element.addEventListener("click", () => {
        let post = element.parentNode.parentNode;
        let commentSection = post.getElementsByClassName("comment-section")[0];
        let commentInputSection = post.getElementsByClassName("comment-input-section")[0];
        
        commentSection.classList.toggle("hidden");
        commentInputSection.classList.toggle("hidden");
    });
});


/*  ***************************************************
            Display delete post dropdown
***************************************************  */

let deleteButtonArray = [...document.getElementsByClassName("post-delete-btn")];
let optionButtonArray = [...document.getElementsByClassName("post-option-btn")];
let optionButtonIconArray = [...document.getElementsByClassName("post-option-btn-icon")];
let dropdownArray = [...document.getElementsByClassName("dropdown")];

optionButtonArray.forEach(element => {
    let dropdown = dropdownArray[optionButtonArray.indexOf(element)];

    element.addEventListener("click", () => {
        dropdown.classList.toggle("hidden");
    });

    dropdown.addEventListener("focusout", () => {
        dropdown.classList.add("hidden");
    });
});


/*  ***************************************************
            Delete post dropdown
***************************************************  */


let postsArray = [...document.getElementsByClassName("post")];

deleteButtonArray.forEach(element => {
    let post = postsArray[deleteButtonArray.indexOf(element)];

    element.addEventListener("click", () => {
        post.parentNode.removeChild(post);
    });
});
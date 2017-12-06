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


const postBtn = document.getElementById("post-btn");
const container = document.getElementById("container");

postBtn.addEventListener("click", () => {

    const postHtml =
                    '<div class="post">\
                        <div class="post-header">\
                            <div>\
                                <img src="resources/img/woman-ava-1.jpeg" alt="avatar" class="post-avatar">\
                            </div>\
                            <div class="post-user-info">\
                                <a href="profilePage.html"><strong>amanda</strong></a>\
                                <div>Helsinki</div>\
                            </div>\
                            <div class="post-option-section">\
                                <button class="post-option-btn"><i class="fa fa-ellipsis-h post-option-btn-icon" aria-hidden="true"></i></button>\
                                <div class="dropdown hidden">\
                                    <button class="post-delete-btn"><i class="fa fa-trash-o" aria-hidden="true"></i> Delete post</button><br>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="post-img-content">\
                            <img src="' + image.src + '" alt="image-content">\
                        </div>\
                        <div class="interactions">\
                            <div class="bookmark-btn"><i class="fa fa-bookmark-o" aria-hidden="true"></i></div>\
                            <div class="comment-btn"><i class="fa fa-commenting-o" aria-hidden="true"></i></div>\
                            <div class="like-btn">\
                                <span>12345678910</span><i class="fa fa-heart-o" aria-hidden="true"></i>\
                            </div>\
                        </div>\
                        <div class="time">\
                            <div>7 hours ago</div>\
                        </div>\
                        <div class="caption">\
                            <div>' + inputCaption.value + '</div>\
                        </div>\
                        <div class="comment-section hidden">\
                            <div class="comment"><strong>emily</strong><span> He\'s so cute!</span></div>\
                            <div class="comment"><strong>jennika</strong><span> Omg I love him!</span></div>\
                        </div>\
                        <div class="comment-input-section hidden">\
                            <textarea name="comment" class="comment-input" cols="30" rows="10" placeholder="Add a comment..."></textarea>\
                        </div>\
                    </div>'

    container.innerHTML = postHtml + container.innerHTML;

    //Remap all button functionalities
    closeModal();
    mapCommentBtn();
    mapPostOptionBtn();
    mapDeletePostBtn();
});


/*  ***************************************************
                Display comment
***************************************************  */

let mapCommentBtn = () => {
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
};

mapCommentBtn();


/*  ***************************************************
            Display delete post dropdown
***************************************************  */


let mapPostOptionBtn = () => {
    let optionBtnArray = [...document.getElementsByClassName("post-option-btn")];
    let dropdownArray = [...document.getElementsByClassName("dropdown")];

    optionBtnArray.forEach(element => {
        let dropdown = dropdownArray[optionBtnArray.indexOf(element)];

        let notHoverOnOptionBtn = 1;
        let notHoverOnDropdown = 1;

        element.addEventListener("click", () => {
            dropdown.classList.toggle("hidden");
        });

        //Check if the mouse is hovering on the dropdown or not

        dropdown.addEventListener("mouseover", () => {
            notHoverOnDropdown = 0;
        });
        dropdown.addEventListener("mouseleave", () => {
            notHoverOnDropdown = 1;
        });

        //Check if the mouse is hovering on the option btn or not

        element.addEventListener("mouseover", () => {
            notHoverOnOptionBtn = 0;
        });
        element.addEventListener("mouseleave", () => {
            notHoverOnOptionBtn = 1;
        });

        //If the mouse is clicked
        document.addEventListener("mouseup", (event) => {
            if(!!notHoverOnDropdown && !!notHoverOnOptionBtn) { //If the mouse is not hovered on the dropdown
                dropdown.classList.add("hidden");
            }
        });
        document.addEventListener("keyup", (event) => {
            if(event.which == 27) { //If ESC btn is pressed
                dropdown.classList.add("hidden");
            }
        });
    });
};

mapPostOptionBtn();


/*  ***************************************************
                    Delete post
***************************************************  */


let mapDeletePostBtn = () => {
    let postsArray = [...document.getElementsByClassName("post")];
    let deleteBtnArray = [...document.getElementsByClassName("post-delete-btn")];

    deleteBtnArray.forEach(element => {
        let post = postsArray[deleteBtnArray.indexOf(element)];

        element.addEventListener("click", (event) => {
            post.parentNode.removeChild(post);
        });
    });
};

mapDeletePostBtn();

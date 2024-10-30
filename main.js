let switchList = document.querySelectorAll(".switch li");
let imgs = Array.from(document.images);

switchList.forEach((li) => {
    li.addEventListener("click", removeActive);
    li.addEventListener("click", manageImgs);

});
// Remove active class from all listsand add it to current
function removeActive() {
    switchList.forEach((li) => {
        li.classList.remove("active");
        this.classList.add("active");
    });
}
// Manage images
function manageImgs() {
    imgs.forEach((img) => {
        img.style.display = "none";
    });
    document.querySelectorAll(this.dataset.cat).forEach((ele) => {
        ele.style.display = "block";
    });
}
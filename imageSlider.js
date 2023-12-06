let startImg = 0;

divSlide();
function slideImg(z) {
    startImg = startImg + z;
    divSlide();
}
function divSlide() {
    let slideDiv = document.querySelectorAll(".slide-column");
    for (let count of slideDiv) {
        count.style.display = "none";
    }
    if (startImg == slideDiv.length) {
        startImg = 0;
    }
    if (startImg < 0) {
        startImg = slideDiv.length - 1;
    }
    slideDiv[startImg].style.display = "block";
}
const video = document.getElementById("background-video");
const box = document.querySelector(".section__box");

function toggleBox() {
    if (box.classList.contains("hidden")) {
        box.style.opacity = 1;
        box.classList.remove("hidden");
    } else {
        box.style.opacity = 0; 
        setTimeout(function() {
            box.classList.add("hidden");
        }, 300);
    }
}

video.addEventListener("click", function() {
    toggleBox();
});
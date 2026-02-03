const carousel = document.getElementById("carousel");
const images = document.querySelectorAll(".face img");

images.forEach(img => {
    img.addEventListener("mouseenter", () => {
        carousel.style.animationPlayState = "paused";
    });

    img.addEventListener("mouseleave", () => {
        carousel.style.animationPlayState = "running";
    });
});

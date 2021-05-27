//slideshow Three
var slideIndex = 1;
showSlidesThree(slideIndex);

// Next/previous controls
function plusSlidesThree(n) {
    showSlidesThree(slideIndex += n);
}

// Thumbnail image controls
function currentSlideThree(n) {
    showSlidesThree(slideIndex = n);
}

function showSlidesThree(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides-three");
    var dots = document.getElementsByClassName("dot-three");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}
//slideshow TWO
var slideIndex = 1;
showSlidesTwo(slideIndex);

// Next/previous controls
function plusSlidesTwo(n) {
    showSlidesTwo(slideIndex += n);
}

// Thumbnail image controls
function currentSlideTwo(n) {
    showSlidesTwo(slideIndex = n);
}

function showSlidesTwo(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides-two");
    var dots = document.getElementsByClassName("dot-two");
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
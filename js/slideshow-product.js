//slideshow Product
var slideIndex = 1;
showSlidesProduct(slideIndex);

// Next/previous controls
function plusSlidesProduct(n) {
    showSlidesProduct(slideIndex += n);
}

// Thumbnail image controls
function currentSlideProduct(n) {
    showSlidesProduct(slideIndex = n);
}

function showSlidesProduct(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides-product");
    var dots = document.getElementsByClassName("dot-product");
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
// starts at 0 since the function slideshow will automatically add 1
var slideNum = 0;

// grabs the slide items
var slides = document.getElementsByClassName("slides");

slidePrev = document.getElementById("prev");
slideNext = document.getElementById("next");

// Every 3 seconds, the slide progresses
setInterval(slideShow,3000);

// moves slides backwards if previous arrow is clicked
slidePrev.addEventListener("click", function() {
    if (slideNum === 1) {
        slideNum = 2;
    }
    else if (slideNum === 2) {
        slideNum = 0;
    }
    else if (slideNum === 3) {
        slideNum = 1;
    }

    slideShow() });

// moves slides forward
slideNext.addEventListener("click", function() {
    if (slideNum === 1) {
        slideNum = 1;
    }
    else if (slideNum === 2) {
        slideNum = 2;
    }
    else if (slideNum === 3) {
        slideNum = 0;
    }
    slideShow()});

// Starts the slideshow function
slideShow();

function slideShow() {

    // accessing DOM and assigning class "slides" to variable slides
    slideNum += 1;

    // moves slide to 1 if it is the last image
    if (slideNum > slides.length) {
        slideNum = 1;
    }

    // displays the last slide if item is moved before 1
    if (slideNum < 1) {
        slideNum = slides.length;
    }

    // this ensures that all slides will NOT show up
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // this will display only one of the images.
    slides[slideNum-1].style.display = "block";

}
// JavaScript Document
var modal;
var slides;

  function openModal(my_slides, my_modal) {
    "use strict";
    modal = document.getElementById(my_modal);
	slides = document.getElementsByClassName(my_slides);
    modal.style.display = "block";
  }
  
  function closeModal() {
	"use strict";
    modal.style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
	"use strict";
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
	"use strict";
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
	"use strict";
    var i;
//    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
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
    captionText.innerHTML = dots[slideIndex-1].alt;
  }
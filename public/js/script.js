

$(document).ready(function() {
  let slideIndex=1;
  showSlides(slideIndex);
  checkName();

})
//end of document ready

let slideIndex=1;


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

function checkName(){
     var queryString = window.location.search;
     var URLParams = new URLSearchParams(queryString);
      if (URLParams.has("racername")) {
            var keyword = URLParams.get("racername");
            localStorage.setItem('racer', keyword);

      }

}



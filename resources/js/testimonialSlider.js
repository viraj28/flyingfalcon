var testIndex = 1;
showTests(testIndex);

function plusTest(n) {
  showTests(testIndex += n);
}

function currentTest(n) {
  showTests(testIndex = n);
}

function showTests(n) {
  var i;
  var testimonials = document.getElementsByClassName("myTestimonials");
  var dots = document.getElementsByClassName("tipka");
  if (n > testimonials.length) {testIndex = 1}
    if (n < 1) {testIndex = testimonials.length}
    for (i = 0; i < testimonials.length; i++) {
      testimonials[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  testimonials[testIndex-1].style.display = "block";
  dots[testIndex-1].className += " active";
  
} 
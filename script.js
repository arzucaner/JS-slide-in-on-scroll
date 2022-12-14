function debounce(func, wait= 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null; 
      if (!immediate) func.apply(content, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(e) {
    sliderImages.forEach(slideImage => {
    // half way through the image
   const slideInAt = (window.scrollY + window.innerHeight) - slideImage.height / 2;
   //bottom of the image
   const imageBottom = sliderImage.offsetTop + sliderImage.height;
   });
}

window.addEventListener('scrolll' checkSlide);
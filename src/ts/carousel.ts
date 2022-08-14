var slideIndex = 1;

var myTimer:any;

var slideshowContainer;

window.addEventListener("load",function() {
    showSlides(slideIndex);
    myTimer = setInterval(function(){plusSlides(1)}, 4000);
  
    //COMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    slideshowContainer = document.querySelector('.slideshow-inner') as HTMLDivElement;
  
    //UNCOMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    // slideshowContainer = document.getElementsByClassName('slideshow-container')[0];
  
    slideshowContainer.addEventListener('mouseenter', pause)
    slideshowContainer.addEventListener('mouseleave', resume)
})

// NEXT AND PREVIOUS CONTROL
function plusSlides(n:number){
  clearInterval(myTimer);
  if (n < 0){
    showSlides(slideIndex -= 1);
  } else {
   showSlides(slideIndex += 1); 
  }
  
  //COMMENT OUT THE LINES BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
  
  if (n === -1){
    myTimer = setInterval(() =>plusSlides(n + 2), 4000);
  } else {
    myTimer = setInterval(() =>plusSlides(n + 1), 4000);
  }
}

//Controls the current slide and resets interval if needed
function currentSlide(n:number){
  clearInterval(myTimer);
  myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
  showSlides(slideIndex = n);
}

function showSlides(n:number){
  var i;
  var slides = document.querySelectorAll(".mySlides") as NodeListOf<HTMLDivElement>;
  var dots = document.querySelectorAll(".dot") as NodeListOf<HTMLSpanElement>;
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  slides.forEach((node) => node.classList.add('display_none'))
  dots.forEach((node) => node.classList.add('display_none'))
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function pause(){
  clearInterval(myTimer);
}

function resume(){
  clearInterval(myTimer);
  myTimer = setInterval(function(){plusSlides(slideIndex)}, 4000);
}
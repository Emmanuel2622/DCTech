let currentSlideIndex = 0;
showSlides();

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("slide");
  const circles = document.getElementsByClassName("control-circle");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    circles[i].classList.remove("active");
  }

  currentSlideIndex++;
  if (currentSlideIndex > slides.length) {
    currentSlideIndex = 1;
  }

  slides[currentSlideIndex - 1].style.display = "block";
  circles[currentSlideIndex - 1].classList.add("active");

  slideTimeout = setTimeout(showSlides, 5000); // Cambia la imagen cada 2 segundos (2000 milisegundos)
}

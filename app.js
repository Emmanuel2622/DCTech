
addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.btn')
  if (btn) {
    btn.addEventListener('click', () =>{
      const mep1 = document.querySelector('.mep1')
      mep1.classList.toggle('show')
    })
  }

  const s1 = document.querySelector('.s1')
  if (s1) {
    s1.addEventListener('click', () =>{
      const mep1 = document.querySelector('.mep1')
      mep1.classList.toggle('show')
    })
  }

  const s2 = document.querySelector('.s2')
  if (s2) {
    s2.addEventListener('click', () =>{
      const mep1 = document.querySelector('.mep1')
      mep1.classList.toggle('show')
    })
  }

  const s3 = document.querySelector('.s3')
  if (s3) {
    s3.addEventListener('click', () =>{
      const mep1 = document.querySelector('.mep1')
      mep1.classList.toggle('show')
    })
  }

  const s4 = document.querySelector('.s4')
  if (s4) {
    s4.addEventListener('click', () =>{
      const mep1 = document.querySelector('.mep1')
      mep1.classList.toggle('show')
    })
  }

})

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

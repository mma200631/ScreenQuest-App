// HERO SLIDESHOW SCRIPT
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  function showNextSlide() {
    // remove 'active' from all slides
    slides.forEach(slide => slide.classList.remove("active"));

    // move to the next slide
    currentSlide = (currentSlide + 1) % slides.length;

    // add 'active' to the next one
    slides[currentSlide].classList.add("active");
  }

  // Change slide every 5 seconds
  setInterval(showNextSlide, 5000);
});

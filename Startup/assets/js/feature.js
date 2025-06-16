const slides = document.querySelectorAll('.feature-carousel-slide');
    const dots = document.querySelectorAll('.feature-carousel-dot');
    let currentSlide = 0;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
        dots[i].classList.toggle('active', i === index);
      });
      currentSlide = index;
    }

    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        showSlide(Number(dot.dataset.slide));
      });
    });
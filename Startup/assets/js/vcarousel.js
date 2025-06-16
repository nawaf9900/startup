document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.vc-carousel');
  const slides = document.querySelectorAll('.vc-carousel-slide');
  const dots = document.querySelectorAll('.vc-carousel-dot');
  let currentIndex = 0;

  function goToSlide(index) {
    const offset = -index * 100;
    carousel.style.transform = `translateX(${offset}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      currentIndex = parseInt(dot.getAttribute('data-index'));
      goToSlide(currentIndex);
    });
  });

  // Initial setup
  goToSlide(0);
});

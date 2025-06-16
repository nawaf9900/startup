const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const slidesContainer = document.querySelector('.slides');
let currentIndex = 0;

function showSlide(index) {
  slidesContainer.style.transform = `translateX(-${index * 100}%)`;

  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
    dots[i].classList.toggle('active', i === index);
  });

  currentIndex = index;
}

document.querySelector('.arrow.left').addEventListener('click', () => {
  const newIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(newIndex);
});

document.querySelector('.arrow.right').addEventListener('click', () => {
  const newIndex = (currentIndex + 1) % slides.length;
  showSlide(newIndex);
});

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => showSlide(i));
});



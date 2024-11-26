// Если нужно добавить анимацию карусели (например, прокрутку), можно использовать JavaScript.
const carousel = document.querySelector('.carousel');
let interval;

document.querySelector('.carousel-container').addEventListener('mouseover', () => {
  let index = 0;
  const images = carousel.querySelectorAll('a');
  interval = setInterval(() => {
    carousel.scrollLeft = index * carousel.clientWidth;
    index = (index + 1) % images.length;
  }, 2000); // скорость смены изображений
});

document.querySelector('.carousel-container').addEventListener('mouseout', () => {
  clearInterval(interval);
});
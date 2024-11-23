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

// добавь то что ниже в файл main 
<div class="carousel-container">
            <img src="./background.jpg" alt="Static Image" class="static-image">
            <div class="carousel">
              <a href="order-form1.html"><img src="fresh_air.jpg" alt="одуванчики"></a>
              <a href="order-form2.html"><img src="honey_fields_gift.jpg" alt="полевыецветы"></a>
              <a href="order-form3.html"><img src="horses.jpeg" alt="лошади"></a>
              <a href="order-form3.html"><img src="roses.jpeg" alt="розы"></a>
            </div>
        </div>
        <script src="script.js"></script> 
const wrapper = document.querySelector('.tab-wrapper');
const leftBtn = document.querySelector('.scroll-btn.left');
const rightBtn = document.querySelector('.scroll-btn.right');

function scrollTabs(amount) {
  wrapper.scrollBy({ left: amount, behavior: 'smooth' });
}

function updateScrollButtons() {
  const scrollLeft = wrapper.scrollLeft;
  const scrollWidth = wrapper.scrollWidth;
  const clientWidth = wrapper.clientWidth;

  const atStart = scrollLeft === 0;
  const atEnd = Math.ceil(scrollLeft + clientWidth) >= scrollWidth;
  const isOverflowing = scrollWidth > clientWidth;

  leftBtn.style.display = isOverflowing && !atStart ? 'block' : 'none';
  rightBtn.style.display = isOverflowing && !atEnd ? 'block' : 'none';
}

window.addEventListener('load', updateScrollButtons);
window.addEventListener('resize', updateScrollButtons);
wrapper.addEventListener('scroll', updateScrollButtons);

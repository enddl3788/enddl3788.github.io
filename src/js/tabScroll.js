const wrapper = document.querySelector('.tab-wrapper');
const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');

function scrollTabs(amount) {
  wrapper.scrollBy({ left: amount, behavior: 'smooth' });
}

function updateScrollButtons() {
  const scrollLeft = wrapper.scrollLeft;
  const scrollWidth = wrapper.scrollWidth;
  const clientWidth = wrapper.clientWidth;

  const epsilon = 2; // 허용 오차
  const atStart = scrollLeft === 0;
  const atEnd = scrollLeft + clientWidth >= scrollWidth - epsilon;
  const isOverflowing = scrollWidth > clientWidth;

  leftBtn.style.display = isOverflowing && !atStart ? '' : 'none';
  rightBtn.style.display = isOverflowing && !atEnd ? '' : 'none';
}

window.addEventListener('load', updateScrollButtons);
window.addEventListener('resize', updateScrollButtons);
wrapper.addEventListener('scroll', updateScrollButtons);

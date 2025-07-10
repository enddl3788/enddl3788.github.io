// 404 파티클 랜덤 스타일 적용
window.addEventListener('DOMContentLoaded', function() {
  const anims = ['float', 'floatReverse', 'float2', 'floatReverse2'];
  const particles = document.querySelectorAll('.particle');
  particles.forEach((el, i) => {
    const size = Math.floor(Math.random()*20)+10;
    const blur = (i+1)*0.02;
    const speed = Math.floor(Math.random()*20)+20;
    const delay = (Math.floor(Math.random()*10))*0.1;
    const anim = anims[Math.floor(Math.random()*anims.length)];
    el.style.top = (Math.random()*90) + '%';
    el.style.left = (Math.random()*90) + '%';
    el.style.fontSize = size + 'px';
    el.style.filter = `blur(${blur}px)`;
    el.style.animation = `${anim} ${speed}s infinite`;
    el.style.animationDelay = `${delay}s`;
  });
});

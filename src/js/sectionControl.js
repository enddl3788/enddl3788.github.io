function showAllSections() {
  document.querySelectorAll('.content-section').forEach(el => {
    el.style.display = 'flex';
    setTimeout(() => { el.classList.add('active'); }, 300);
  });
  document.querySelectorAll('.nav-link').forEach(tab => tab.classList.remove('active'));
}

document.querySelector('.logo').addEventListener('click', showAllSections);
document.querySelector('#search_icon').addEventListener('click', showAllSections);

// 맨 위로 버튼 기능
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
window.addEventListener('scroll', function() {
  if (window.scrollY > 200) {
    setTimeout(() => { scrollToTopBtn.style.display = 'flex'; }, 200);
    setTimeout(() => { scrollToTopBtn.style.opacity = '1'; }, 300);
  } else {
    scrollToTopBtn.style.opacity = '0';
    setTimeout(() => { scrollToTopBtn.style.display = 'none'; }, 200);
  }
});
scrollToTopBtn.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.querySelectorAll('.nav-link').forEach(tab => {
  tab.addEventListener('click', function(event) {
    event.preventDefault();
    // 모든 탭 비활성화
    document.querySelectorAll('.nav-link').forEach(t => t.classList.remove('active'));
    this.classList.add('active');

    // 모든 섹션 숨기기 (active 제거 + display: none)
    document.querySelectorAll('.content-section').forEach(el => {
      el.classList.remove('active');
      setTimeout(() => { el.style.display = 'none'; }, 200); // 트랜지션 시간 후에 display: none
    });

    // 해당 섹션만 보이기 (active 추가 + display: flex)
    const targetId = this.getAttribute('href');
    if (targetId && targetId.startsWith('#')) {
      const targetPane = document.querySelector(targetId);
      if (targetPane) {
        setTimeout(() => { targetPane.style.display = 'flex'; }, 200); 
        setTimeout(() => { targetPane.classList.add('active'); }, 300); // display 적용 후 애니메이션 시작
      }
    }
  });
});

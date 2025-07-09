function showAllSections() {
  document.querySelectorAll('.content-section').forEach(el => {
    el.style.display = '';
  });
  document.querySelectorAll('.nav-link').forEach(tab => tab.classList.remove('active'));
}

document.querySelector('.logo').addEventListener('click', showAllSections);
document.querySelector('#search_icon').addEventListener('click', showAllSections);

document.querySelectorAll('.nav-link').forEach(tab => {
  tab.addEventListener('click', function(event) {
    event.preventDefault();
    // 모든 탭 비활성화
    document.querySelectorAll('.nav-link').forEach(t => t.classList.remove('active'));
    this.classList.add('active');

    // 모든 섹션 숨기기
    document.querySelectorAll('.content-section').forEach(el => {
      el.style.display = 'none';
    });

    // 해당 섹션만 보이기
    const targetId = this.getAttribute('href');
    if (targetId && targetId.startsWith('#')) {
      const targetPane = document.querySelector(targetId);
      if (targetPane) {
        targetPane.style.display = '';
      }
    }
  });
});

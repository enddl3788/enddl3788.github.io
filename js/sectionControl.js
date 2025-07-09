function showAllSections() {
  document.querySelectorAll('.tab-pane').forEach(el => {
    el.classList.add('show', 'active');
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

    // 모든 섹션 숨기기 (liquidGlass-wrapper 영향 방지)
    document.querySelectorAll('.tab-pane').forEach(el => {
      el.classList.remove('show', 'active');
      el.style.display = 'none';
    });

    // 해당 섹션만 보이기
    const targetId = this.getAttribute('href');
    if (targetId && targetId.startsWith('#')) {
      const targetPane = document.querySelector(targetId);
      if (targetPane) {
        targetPane.classList.add('show', 'active');
        targetPane.style.display = '';
      }
    }
  });
});

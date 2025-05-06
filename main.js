// ---- 탭 스크롤 기능 (이 부분은 유지) ----
const wrapper = document.querySelector('.tab-wrapper');
const leftBtn = document.querySelector('.scroll-btn.left');
const rightBtn = document.querySelector('.scroll-btn.right');

// 탭 스크롤 함수
function scrollTabs(amount) {
  wrapper.scrollBy({ left: amount, behavior: 'smooth' });
}

// 스크롤 버튼 표시/숨기기 업데이트 함수
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

// 초기 로드, 리사이즈, 스크롤 시 업데이트
window.addEventListener('load', updateScrollButtons);
window.addEventListener('resize', updateScrollButtons);
wrapper.addEventListener('scroll', updateScrollButtons);

// 전체 내용 펼치기(로고 클릭) 함수
function showAllSections() {
  document.querySelectorAll('.tab-pane').forEach(el => {
    el.classList.add('show', 'active');
  });
  document.querySelectorAll('.nav-link').forEach(tab => tab.classList.remove('active'));
}
document.querySelector('.logo').addEventListener('click', showAllSections);
document.querySelector('.search').addEventListener('click', showAllSections);
// (검색창 옆 돋보기 아이콘 등 다른 트리거가 있다면 여기도 showAllSections 추가 연결)

// 네비탭 클릭 시 전체 펼쳐진 상태면: 전체 초기화 + 해당 탭 콘텐츠만 show/active
document.querySelectorAll('.nav-link').forEach(tab => {
  tab.addEventListener('click', function(event) {
    // 전체 펼침 상태(모든 섹션이 show/active) 체크
    const panes = document.querySelectorAll('.tab-pane');
    const allShown = Array.from(panes).every(el =>
      el.classList.contains('show') && el.classList.contains('active')
    );
    if (allShown) {
      // 전체 초기화(모든 show/active 제거)
      panes.forEach(el => el.classList.remove('show', 'active'));

      // 직접 클릭한 탭의 href/id로 찾아 show/active 부여
      const targetId = this.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        const targetPane = document.querySelector(targetId);
        if (targetPane) {
          targetPane.classList.add('show', 'active');
        }
      }
      // 이후 Bootstrap의 기본 이벤트 진행을 막아야 함!
      event.preventDefault();
      // 모든 nav-link의 active 제거 후 현재 탭만 active
      document.querySelectorAll('.nav-link').forEach(t => t.classList.remove('active'));
      this.classList.add('active');
    }
    // 전체 펼침 상태가 아니라면, Bootstrap 기본 동작(탭 이동)만 수행
    // (이때는 event.preventDefault() 없음)
  });
});

// ---- 블로그 상세 보기 (그대로 유지) ----
function showBlogDetail(targetId) {
  // 모든 상세글 숨기기
  document.querySelectorAll('.blog-detail').forEach(function(el) {
    el.style.display = 'none';
  });

  // 선택한 상세글 보이기
  document.getElementById('blog-detail-' + targetId).style.display = 'block';

  // 클릭된 프리뷰에 'active' 클래스 부여
  document.querySelectorAll('.blog-preview').forEach(function(el) {
    el.classList.remove('active');
  });

  var previews = document.querySelectorAll('.blog-preview');
  previews.forEach(function(preview) {
    if (preview.getAttribute('onclick').includes(targetId)) {
      preview.classList.add('active');
    }
  });
}
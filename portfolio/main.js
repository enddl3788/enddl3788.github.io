document.querySelectorAll('.naver-tabs li').forEach(tab => {
  tab.addEventListener('click', function() {
    document.querySelectorAll('.naver-tabs li').forEach(t => t.classList.remove('active'));
    this.classList.add('active');
    document.querySelectorAll('.content-section').forEach(sec => sec.classList.remove('visible'));
    document.getElementById(this.dataset.menu).classList.add('visible');
  });
});

function showBlogDetail(targetId) {
  // 모든 상세글 숨기기
  document.querySelectorAll('.blog-detail').forEach(function(el) {
    el.style.display = 'none';
  });
  // 선택한 상세글 보이기
  document.getElementById('blog-detail-' + targetId).style.display = 'block';

  // (선택) 클릭된 프리뷰에 'active' 클래스 부여
  document.querySelectorAll('.blog-preview').forEach(function(el) {
    el.classList.remove('active');
  });
  // 이벤트 타겟이 아닌 경우를 위해, 클릭된 요소에 클래스를 주려면
  // blog-preview에 data-id="militalk" 등 부여 후 아래처럼
  var previews = document.querySelectorAll('.blog-preview');
  previews.forEach(function(preview) {
    if (preview.getAttribute('onclick').includes(targetId)) {
      preview.classList.add('active');
    }
  });
}
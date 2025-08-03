function showBlogDetail(targetId) {
  // 모든 블로그 디테일 숨기기
  document.querySelectorAll('.blog-detail').forEach(el => {
    el.classList.remove('active');
    
    // 슬라이드 업
    el.style.height = el.scrollHeight + 'px'; // 현재 높이 설정
    requestAnimationFrame(() => {
      el.style.height = '0';
      el.style.opacity = '0';
    });

    // display: none 처리
    setTimeout(() => {
      el.style.display = 'none';
    }, 200); // 애니메이션 종료 후
  });

  const detailElement = document.getElementById('blog-detail-' + targetId);

  // 슬라이드 다운 시작
  setTimeout(() => {
    detailElement.style.display = 'block';
    const fullHeight = detailElement.scrollHeight + 'px';
    detailElement.style.height = '0'; // 초기 높이
    detailElement.style.opacity = '0';
    
    requestAnimationFrame(() => {
      detailElement.style.height = fullHeight;
      detailElement.style.opacity = '1';
    });

    detailElement.classList.add('active');

    // 높이 고정 해제 (optional)
    setTimeout(() => {
      detailElement.style.height = 'auto';
    }, 300);
  }, 200);

  // 프리뷰 선택 상태 처리
  document.querySelectorAll('.blog-preview').forEach(el => {
    el.classList.remove('active');
  });

  document.querySelectorAll('.blog-preview').forEach(preview => {
    if (preview.getAttribute('onclick').includes(targetId)) {
      preview.classList.add('active');
    }
  });

  // 스크롤 이동
  setTimeout(() => {
    detailElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 500);
}

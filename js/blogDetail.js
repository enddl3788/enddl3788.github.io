function showBlogDetail(targetId) {
  document.querySelectorAll('.blog-detail').forEach(el => {
    el.style.display = 'none';
  });

  const detailElement = document.getElementById('blog-detail-' + targetId);
  detailElement.style.display = 'block';

  document.querySelectorAll('.blog-preview').forEach(el => {
    el.classList.remove('active');
  });

  document.querySelectorAll('.blog-preview').forEach(preview => {
    if (preview.getAttribute('onclick').includes(targetId)) {
      preview.classList.add('active');
    }
  });

  detailElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

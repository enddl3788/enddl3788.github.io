window.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.tab-pane').forEach(el => {
    el.classList.add('show', 'active');
  });
  document.querySelectorAll('.nav-link').forEach(tab => tab.classList.remove('active'));
});

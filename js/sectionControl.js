function showAllSections() {
  document.querySelectorAll('.tab-pane').forEach(el => {
    el.classList.add('show', 'active');
  });
  document.querySelectorAll('.nav-link').forEach(tab => tab.classList.remove('active'));
}

document.querySelector('.logo').addEventListener('click', showAllSections);
document.querySelector('#search_icon').addEventListener('click', showAllSections);

document.querySelectorAll('.nav-link').forEach(tab => {
  tab.addEventListener('click', function(event) {
    const panes = document.querySelectorAll('.tab-pane');
    const allShown = Array.from(panes).every(el =>
      el.classList.contains('show') && el.classList.contains('active')
    );

    if (allShown) {
      panes.forEach(el => el.classList.remove('show', 'active'));

      const targetId = this.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        const targetPane = document.querySelector(targetId);
        if (targetPane) {
          targetPane.classList.add('show', 'active');
        }
      }

      event.preventDefault();
      document.querySelectorAll('.nav-link').forEach(t => t.classList.remove('active'));
      this.classList.add('active');
    }
  });
});

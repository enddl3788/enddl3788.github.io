const searchInput = document.getElementById('search-input');
const targetText = '송예빈';

searchInput.addEventListener('input', function() {
  const inputLength = this.value.length;
  if (inputLength > targetText.length) {
    this.value = targetText;
  } else {
    this.value = targetText.substring(0, inputLength);
  }
});

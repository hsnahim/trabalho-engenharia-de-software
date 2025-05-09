function navigateTo(page) {
  window.location.href = `HTML/${page}`;
}

function navigateToLocal(page) {
  window.location.href = page;
}

document.addEventListener('DOMContentLoaded', () => {
  const stars = document.querySelectorAll('.rating .star');
  const ratingInput = document.getElementById('ratingValue');

  stars.forEach(star => {
    star.addEventListener('click', () => {
      const value = parseInt(star.getAttribute('data-value'));
      ratingInput.value = value;

      stars.forEach(s => {
        s.classList.remove('selected');
        if (parseInt(s.getAttribute('data-value')) <= value) {
          s.classList.add('selected');
        }
      });
    });

    star.addEventListener('mouseover', () => {
      const value = parseInt(star.getAttribute('data-value'));
      stars.forEach(s => {
        s.classList.remove('hovered');
        if (parseInt(s.getAttribute('data-value')) <= value) {
          s.classList.add('hovered');
        }
      });
    });

    star.addEventListener('mouseout', () => {
      stars.forEach(s => s.classList.remove('hovered'));
    });
  });
});
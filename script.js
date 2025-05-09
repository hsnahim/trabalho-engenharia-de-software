function navigateTo(page) {
  window.location.href = `HTML/${page}`;
}

function navigateToLocal(path) {
    window.location.href = path; 
}

document.querySelectorAll('.star').forEach(star => {
  star.addEventListener('click', function() {
    const value = this.dataset.value;
    document.getElementById('ratingValue').value = value;
    
 
    document.querySelectorAll('.star').forEach(s => {
      s.classList.remove('active');
      if(s.dataset.value <= value) s.classList.add('active');
    });
  });
});


function storeUserData(email, password) {
  const userData = {
    email: email,
    password: password,
    timestamp: new Date().toISOString()
  };
  localStorage.setItem('user_' + email, JSON.stringify(userData));
}

 window.addEventListener('load', () => {
    const selected = localStorage.getItem('selectedItem');
    if(selected) {
      document.querySelectorAll('.menu-item').forEach(button => {
        if(button.querySelector('.food-name').textContent === selected) {
          button.classList.add('selected');
          button.setAttribute('data-selected', 'true');
        }
      });
    }
  });


function getStoredUser(email) {
  const userData = localStorage.getItem('user_' + email);
  return userData ? JSON.parse(userData) : null;
}
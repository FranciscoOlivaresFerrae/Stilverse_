document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        localStorage.setItem('theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
      });
    }
  
    // Carga preferencia guardada
    if (localStorage.getItem('theme') === 'light') {
      document.body.classList.add('light-theme');
    }
  });
  
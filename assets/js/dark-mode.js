(function() {
  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    var icon = document.getElementById('dark-mode-icon');
    if (icon) {
      if (theme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
      } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
      }
    }
    try { localStorage.setItem('theme', theme); } catch(e) {}
  }

  window.toggleDarkMode = function() {
    var current = document.documentElement.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
  };

  // Sync icon with theme applied by the inline anti-FOUT script
  document.addEventListener('DOMContentLoaded', function() {
    var theme = document.documentElement.getAttribute('data-theme');
    var icon = document.getElementById('dark-mode-icon');
    if (icon && theme === 'dark') {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    }
  });
})();

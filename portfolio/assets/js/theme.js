(function () {
  const storageKey = 'timelens-theme';
  const root = document.documentElement;

  function preferredTheme() {
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    document.querySelectorAll('[data-theme-label]').forEach((el) => {
      el.textContent = theme === 'dark' ? 'Light' : 'Dark';
    });
  }

  const saved = localStorage.getItem(storageKey);
  applyTheme(saved || preferredTheme());

  document.addEventListener('click', function (event) {
    const btn = event.target.closest('[data-theme-toggle]');
    if (!btn) return;
    const next = (root.getAttribute('data-theme') || 'dark') === 'dark' ? 'light' : 'dark';
    localStorage.setItem(storageKey, next);
    applyTheme(next);
  });
})();

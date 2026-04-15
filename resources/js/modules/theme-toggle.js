const toggle = document.querySelector('[data-theme-toggle]');

if (toggle) {
  const applyTheme = (isDark) => {
    document.documentElement.classList.toggle('dark', isDark);
    document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
    toggle.setAttribute('aria-pressed', String(isDark));
  };

  // Initialize aria-pressed from current state
  applyTheme(document.documentElement.classList.contains('dark'));

  // Manual toggle
  toggle.addEventListener('click', () => {
    const isDark = !document.documentElement.classList.contains('dark');
    applyTheme(isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });

  // Sync across tabs
  window.addEventListener('storage', (e) => {
    if (e.key !== 'theme') return;
    applyTheme(e.newValue === 'dark');
  });

  // Follow OS changes — but only if the user hasn't made an explicit choice
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (localStorage.getItem('theme')) return;
    applyTheme(e.matches);
  });
}

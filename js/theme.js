(function () {
    const STORAGE_KEY = 'theme';

    function getPreferred() {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) return stored;
        return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    }

    // Exposed globally so components.js can call it after injecting the button
    window.applyTheme = function (theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem(STORAGE_KEY, theme);
        var btn = document.querySelector('.theme-toggle');
        if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
    };

    window.toggleTheme = function () {
        var current = document.documentElement.getAttribute('data-theme');
        window.applyTheme(current === 'dark' ? 'light' : 'dark');
    };

    // Apply immediately to prevent flash (button doesn't exist yet, that's OK)
    window.applyTheme(getPreferred());
})();

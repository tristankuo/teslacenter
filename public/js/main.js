// Theme management
function getStoredTheme() {
    return localStorage.getItem('teslalink_theme') || 
           (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('teslalink_theme', theme);
    updateThemeToggle(theme);
}

function updateThemeToggle(theme) {
    const toggle = document.getElementById('theme-toggle');
    if (toggle) {
        toggle.textContent = theme === 'light' ? '🌙 Dark' : '☀️ Light';
    }
}

function toggleTheme() {
    const currentTheme = getStoredTheme();
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
}

// Environment-aware navigation
function getBaseUrl() {
    // Check if we're on GitHub Pages
    if (window.location.hostname === 'tristankuo.github.io' && window.location.pathname.startsWith('/teslalink')) {
        return '/teslalink/';
    }
    // Default to root for Firebase hosting or local development
    return '/';
}

function setBackLinks() {
    const baseUrl = getBaseUrl();
    const backLinks = document.querySelectorAll('a.back-link');
    backLinks.forEach(link => {
        link.href = baseUrl;
    });
}

// Initialize everything on load
document.addEventListener('DOMContentLoaded', function() {
    setTheme(getStoredTheme());
    setBackLinks();
});

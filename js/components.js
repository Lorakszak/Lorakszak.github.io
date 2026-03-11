document.addEventListener('DOMContentLoaded', function () {
    const currentPage = location.pathname.split('/').pop() || 'index.html';

    function navLink(href, label) {
        const isActive = currentPage === href;
        return '<li><a href="' + href + '"' + (isActive ? ' class="active"' : '') + '>' + label + '</a></li>';
    }

    const headerHTML = '<header class="site-header">' +
        '<div class="header-inner">' +
        '<a href="index.html" class="site-logo"><img src="assets/images/profile_photo.jpg" alt="" class="nav-avatar">Karol <span>Roszak</span></a>' +
        '<button class="hamburger" aria-label="Menu">&#9776;</button>' +
        '<ul class="nav-links">' +
        navLink('index.html', 'Home') +
        navLink('blog.html', 'Blog') +
        navLink('projects.html', 'Projects') +
        navLink('contact.html', 'Contact') +
        '<li><button class="theme-toggle" aria-label="Toggle theme">☀️</button></li>' +
        '</ul>' +
        '</div>' +
        '</header>';

    const footerHTML = '<footer class="site-footer">' +
        '<p>&copy; ' + new Date().getFullYear() + ' Karol Roszak &middot; ' +
        '<a href="https://linktr.ee/lorakszak" target="_blank" rel="noopener">Linktree</a></p>' +
        '</footer>';

    // Inject
    document.getElementById('header-placeholder').innerHTML = headerHTML;
    document.getElementById('footer-placeholder').innerHTML = footerHTML;

    // Re-apply theme button state
    const theme = document.documentElement.getAttribute('data-theme') || 'dark';
    const btn = document.querySelector('.theme-toggle');
    if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';

    // Hamburger toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function () {
            navLinks.classList.toggle('open');
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var container = document.getElementById('projects-grid');
    if (!container) return;

    fetch('projects/projects.json')
        .then(function (res) { return res.json(); })
        .then(function (projects) {
            renderProjects(projects, container);
        })
        .catch(function () {
            container.innerHTML = '<p>Failed to load projects.</p>';
        });

    function renderProjects(projects, el) {
        if (projects.length === 0) {
            el.innerHTML = '<p>No projects yet.</p>';
            return;
        }
        el.innerHTML = projects.map(function (p) {
            var tagsHTML = (p.tags || []).map(function (t) {
                return '<span class="tag">' + t + '</span>';
            }).join('');

            var linksHTML = '';
            if (p.github) {
                linksHTML += '<a href="' + p.github + '" target="_blank" rel="noopener">GitHub &rarr;</a>';
            }
            if (p.demo) {
                linksHTML += '<a href="' + p.demo + '" target="_blank" rel="noopener">Demo &rarr;</a>';
            }

            return '<article class="card">' +
                '<h3>' + p.name + '</h3>' +
                '<p class="description">' + p.description + '</p>' +
                '<div class="tech-tags">' + tagsHTML + '</div>' +
                (linksHTML ? '<div class="links">' + linksHTML + '</div>' : '') +
                '</article>';
        }).join('');
    }
});

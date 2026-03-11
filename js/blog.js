document.addEventListener('DOMContentLoaded', function () {
    var container = document.getElementById('blog-posts');
    if (!container) return;

    fetch('posts/posts.json')
        .then(function (res) { return res.json(); })
        .then(function (posts) {
            posts.sort(function (a, b) {
                return new Date(b.date) - new Date(a.date);
            });
            renderPosts(posts, container);
        })
        .catch(function () {
            container.innerHTML = '<p>Failed to load posts.</p>';
        });

    function renderPosts(posts, el) {
        if (posts.length === 0) {
            el.innerHTML = '<p>No posts yet.</p>';
            return;
        }
        el.innerHTML = posts.map(function (p) {
            var tagsHTML = (p.tags || []).map(function (t) {
                return '<span class="tag">' + t + '</span>';
            }).join('');
            return '<article class="card">' +
                '<h3><a href="post.html?slug=' + p.slug + '">' + p.title + '</a></h3>' +
                '<div class="date">' + p.date + '</div>' +
                '<div class="description">' + p.description + '</div>' +
                '<div class="tags">' + tagsHTML + '</div>' +
                '</article>';
        }).join('');
    }
});

// Export for index page latest posts
function loadLatestPosts(container, count) {
    fetch('posts/posts.json')
        .then(function (res) { return res.json(); })
        .then(function (posts) {
            posts.sort(function (a, b) {
                return new Date(b.date) - new Date(a.date);
            });
            var latest = posts.slice(0, count || 3);
            if (latest.length === 0) {
                container.innerHTML = '<p>No posts yet.</p>';
                return;
            }
            container.innerHTML = latest.map(function (p) {
                return '<article class="card">' +
                    '<h3><a href="post.html?slug=' + p.slug + '">' + p.title + '</a></h3>' +
                    '<div class="date">' + p.date + '</div>' +
                    '<div class="description">' + p.description + '</div>' +
                    '</article>';
            }).join('');
        })
        .catch(function () {
            container.innerHTML = '<p>Failed to load posts.</p>';
        });
}

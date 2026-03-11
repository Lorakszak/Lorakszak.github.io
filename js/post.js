document.addEventListener('DOMContentLoaded', function () {
    var params = new URLSearchParams(window.location.search);
    var slug = params.get('slug');
    var postHeader = document.getElementById('post-header');
    var postContent = document.getElementById('post-content');

    if (!slug) {
        postContent.innerHTML = '<p>No post specified. <a href="blog.html">Back to blog</a></p>';
        return;
    }

    // Fetch metadata
    fetch('posts/posts.json')
        .then(function (res) { return res.json(); })
        .then(function (posts) {
            var meta = posts.find(function (p) { return p.slug === slug; });
            if (meta) {
                document.title = meta.title + ' | Karol Roszak';
                var tagsHTML = (meta.tags || []).map(function (t) {
                    return '<span class="tag">' + t + '</span>';
                }).join(' ');
                postHeader.innerHTML = '<h1>' + meta.title + '</h1>' +
                    '<div class="meta">' + meta.date + ' &middot; ' + tagsHTML + '</div>';
            }
        });

    // Fetch and render markdown
    fetch('posts/' + slug + '.md')
        .then(function (res) {
            if (!res.ok) throw new Error('Not found');
            return res.text();
        })
        .then(function (md) {
            postContent.innerHTML = marked.parse(md);
            // Highlight code blocks
            document.querySelectorAll('pre code').forEach(function (block) {
                hljs.highlightElement(block);
            });
        })
        .catch(function () {
            postContent.innerHTML = '<p>Post not found. <a href="blog.html">Back to blog</a></p>';
        });
});

# Lorakszak.github.io

Personal website of Karol Roszak (Lorakszak). At least until I decide to move to a personal hosting. 

## Features

- Dark/light theme with system preference detection
- Blog with Markdown rendering (using marked.js + highlight.js)
- Responsive design with mobile hamburger menu
- No build tools required

## Adding a Blog Post

1. Create a new `.md` file in `posts/` (e.g., `posts/my-new-post.md`)
2. Add an entry to `posts/posts.json` with `slug`, `title`, `date`, `description`, and `tags`
3. Commit and push

## Adding a Project

1. Add an entry to `projects/projects.json`:

```json
{
    "name": "My Project",
    "description": "What it does.",
    "tags": ["Python", "LLMs"],
    "github": "https://github.com/...",
    "demo": null
}
```

2. Commit and push

Set `"demo"` to a URL string or `null` if there is no live demo. No HTML editing needed.

## GitHub Pages Limitations

- **Static only** — no server-side code, databases, or persistent file uploads; use third-party services (Formspree, Firebase, Auth0) for dynamic functionality
- **Repo size**: 1 GB max
- **Published site size**: 1 GB max
- **Monthly bandwidth**: 100 GB soft limit
- **Max file size**: 100 MB
- **One personal site** per GitHub account (`username.github.io`); project sites are separate repos
- **HTTPS enforced** — mixed HTTP/HTTPS content will be blocked by browsers
- **No native custom build pipelines** — Jekyll runs automatically if a `_config.yml` is present; other static site generators require a GitHub Actions workflow

## Local Development

To quickly test run:

```bash
python3 -m http.server
```

Then open `http://localhost:8000` in your browser.

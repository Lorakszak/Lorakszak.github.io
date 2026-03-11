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

## Local Development

To quickly test run:

```bash
python3 -m http.server
```

Then open `http://localhost:8000` in your browser.

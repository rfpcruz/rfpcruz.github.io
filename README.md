# Personal page

Plain HTML/CSS/JS, no build step. Designed to be edited directly and hosted for free on GitHub Pages.

## Files

- `index.html` — structure and copy (name, bio, "now" block, contact links)
- `styles.css` — all styling
- `articles.js` — the list of articles, edit this to add a new post
- `script.js` — renders the article list, no need to touch this

## Publish on GitHub Pages

1. Create a new repository on GitHub, e.g. `yourusername.github.io` (using that exact name gives you a root URL; any other name works too, just under a `/reponame/` path).
2. Push these files to the repository root (`main` branch).
3. In the repo, go to **Settings → Pages**, set source to "Deploy from a branch", branch `main`, folder `/ (root)`. Save.
4. Your site will be live at `https://yourusername.github.io` (or `https://yourusername.github.io/reponame`) within a minute or two.

## Add a new article later

Open `articles.js` and add an entry to the top of the array:

```js
{
  title: "Your article title",
  date: "2026-08-15",
  url: "https://dev.to/yourusername/your-post"
}
```

`url` can point to a post hosted elsewhere (dev.to, Medium, Substack) or to a local HTML file you add to the repo (e.g. `articles/your-post.html`). No other file needs to change.

## Before publishing, replace the placeholders

- `index.html`: "Your Name", the `<title>`, the GitHub and LinkedIn URLs in the `#contact` section
- Add a real favicon if you want (currently a blank data URI)

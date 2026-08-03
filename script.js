document.getElementById('year').textContent = new Date().getFullYear();

function formatDate(iso) {
  const d = new Date(iso + 'T00:00:00');
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' });
}

const list = document.getElementById('article-list');

if (typeof ARTICLES !== 'undefined' && ARTICLES.length > 0) {
  ARTICLES.forEach(({ title, date, url }) => {
    const a = document.createElement('a');
    a.className = 'article';
    a.href = url;
    a.target = url.startsWith('http') ? '_blank' : '_self';
    a.rel = 'noopener';
    a.innerHTML = `
      <span class="article-title">${title}</span>
      <span class="article-date">${formatDate(date)}</span>
    `;
    list.appendChild(a);
  });
} else {
  list.innerHTML = '<p class="empty-state">nothing published yet<span class="cursor"></span></p>';
}

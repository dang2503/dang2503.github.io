// Portfolio write-ups. Only completed, real write-ups should replace template cards.
// Set category to TryHackMe, CTF, or Incident Report. Add topical tags for discovery.
const posts = [
  {
    title: 'Cyborg — Squid, BorgBackup & Linux Privilege Escalation',
    category: 'TryHackMe',
    tags: ['Enumeration', 'Credential Recovery', 'BorgBackup', 'Linux', 'Privilege Escalation'],
    level: 'Easy',
    date: '20 Nov 2026',
    description: 'From exposed Squid credentials and a Borg backup to SSH access and a root shell via a vulnerable backup script.',
    url: 'writeups/cyborg.html'
  },
  {
    title: 'TryHackMe Write-up Template',
    category: 'TryHackMe',
    tags: ['Lab', 'Enumeration'],
    level: 'Template',
    date: 'Starter',
    description: 'A reusable layout for documenting rooms, commands and lessons learned.',
    url: 'writeups/template.html'
  },
  {
    title: 'CTF Write-up Checklist',
    category: 'CTF',
    tags: ['CTF', 'Methodology'],
    level: 'Template',
    date: 'Starter',
    description: 'A structured approach to explaining a CTF challenge from start to finish.',
    url: 'writeups/template.html'
  }
];

let category = 'All';
const activeTopics = new Set();
const cards = document.getElementById('cards');
const search = document.getElementById('search');
const count = document.getElementById('count');
const topicList = document.getElementById('topic-list');
const topicDropdown = document.getElementById('topic-dropdown');
const topicTotal = document.getElementById('topic-total');
const activeFilters = document.getElementById('active-filters');
const clearFilters = document.getElementById('clear-filters');
const filterButtons = [...document.querySelectorAll('#filters button')];

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, ch => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[ch]));
}
function safeUrl(raw) {
  const value = String(raw || '');
  return /^(?:writeups\/[a-zA-Z0-9/_-]+\.html|https:\/\/[^\s]+)$/.test(value)
    ? escapeHtml(encodeURI(value))
    : '#writeups';
}
function topics() {
  const counts = new Map();
  for (const post of posts) {
    for (const tag of new Set(post.tags || [])) {
      counts.set(tag, (counts.get(tag) || 0) + 1);
    }
  }
  return [...counts].sort((a,b) => b[1] - a[1] || a[0].localeCompare(b[0]));
}
function setCategory(next) {
  category = next;
  filterButtons.forEach(button => {
    const selected = button.dataset.filter === category;
    button.classList.toggle('active', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
  render();
}
// Multi-select topics: a write-up matches when it has at least one selected tag.
function setTopic(next) {
  if (activeTopics.has(next)) activeTopics.delete(next);
  else activeTopics.add(next);
  render();
}
function renderTopics() {
  const topicItems = topics();
  const currentButtons = [...topicList.querySelectorAll('button[data-topic]')];
  // Rebuild only when the list of topics actually changes. Replacing a clicked
  // button during its click event makes the outside-click handler close the menu.
  if (currentButtons.length !== topicItems.length ||
      topicItems.some(([tag], index) => currentButtons[index].dataset.topic !== tag)) {
    topicList.innerHTML = topicItems.map(([tag, number]) =>
      `<button type="button" class="topic-option" data-topic="${escapeHtml(tag)}" aria-pressed="false"><span># ${escapeHtml(tag)}</span><span class="topic-count">${number}</span></button>`
    ).join('') || '<p class="empty-topics">Topics appear when write-ups are added.</p>';
  }
  topicList.querySelectorAll('button[data-topic]').forEach(button => {
    const selected = activeTopics.has(button.dataset.topic);
    button.classList.toggle('active', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
}
function render() {
  const q = search.value.toLowerCase().trim();
  const matching = posts.filter(post => {
    const categoryMatch = category === 'All' || post.category === category;
    const topicMatch = !activeTopics.size || (post.tags || []).some(tag => activeTopics.has(tag));
    const searchMatch = [post.title, post.category, post.description, ...(post.tags || [])]
      .join(' ').toLowerCase().includes(q);
    return categoryMatch && topicMatch && searchMatch;
  });
  count.textContent = `${matching.length} ${matching.length === 1 ? 'article' : 'articles'}`;
  const selected = [];
  if (category !== 'All') selected.push(`<button type="button" class="selected-filter" data-clear="category" aria-label="Remove category filter">Category: ${escapeHtml(category)} ×</button>`);
  for (const tag of activeTopics) selected.push(`<button type="button" class="selected-filter" data-clear-topic="${escapeHtml(tag)}" aria-label="Remove topic ${escapeHtml(tag)}">#${escapeHtml(tag)} ×</button>`);
  activeFilters.innerHTML = selected.join('');
  clearFilters.hidden = category === 'All' && !activeTopics.size && !q;
  cards.innerHTML = matching.length ? matching.map(post =>
    `<article class="entry editorial-entry">
      <div class="entry-head"><span class="tag">${escapeHtml(post.category)}</span><span class="level">${escapeHtml(post.level)}</span></div>
      <h3><a class="entry-title-link" href="${safeUrl(post.url)}" aria-label="Open write-up: ${escapeHtml(post.title)}">${escapeHtml(post.title)}</a></h3>
      <p>${escapeHtml(post.description)}</p>
      <div class="entry-tags" aria-label="Topics">${(post.tags || []).map(tag =>
        `<button type="button" class="topic-tag${activeTopics.has(tag) ? ' active' : ''}" data-topic="${escapeHtml(tag)}" aria-label="Filter by topic ${escapeHtml(tag)}"># ${escapeHtml(tag)}</button>`
      ).join('')}</div>
      <div class="foot"><span>${escapeHtml(post.date)}</span><span class="read-more">Read article ↗</span></div>
    </article>`
  ).join('') : '<div class="empty-writeups"><strong>No articles found</strong><p>Try another topic, category, or search.</p><button type="button" id="reset-empty">Show all articles</button></div>';
  renderTopics();
  topicDropdown.classList.toggle('has-selection', activeTopics.size > 0);
  topicTotal.textContent = activeTopics.size ? activeTopics.size : topics().length;
  topicTotal.setAttribute('aria-label', activeTopics.size ? `${activeTopics.size} selected topics` : `${topics().length} available topics`);
  document.getElementById('clear-topics').hidden = activeTopics.size === 0;
}
activeFilters.addEventListener('click', event => {
  const button = event.target.closest('button[data-clear]');
  if (!button) return;
  if (button.dataset.clear === 'category') setCategory('All');
});
activeFilters.addEventListener('click', event => {
  const button = event.target.closest('button[data-clear-topic]');
  if (button) setTopic(button.dataset.clearTopic);
});
filterButtons.forEach(button => button.addEventListener('click', () => setCategory(button.dataset.filter)));
topicList.addEventListener('click', event => {
  const button = event.target.closest('button[data-topic]');
  if (!button) return;
  event.stopPropagation();
  setTopic(button.dataset.topic);
  // Keep the popover open for additional selections.
});
document.getElementById('clear-topics').addEventListener('click', event => {
  event.stopPropagation();
  activeTopics.clear();
  render();
});
document.addEventListener('click', event => {
  // The event path remains reliable even if some other UI is re-rendered.
  if (topicDropdown.open && !event.composedPath().includes(topicDropdown)) {
    topicDropdown.open = false;
  }
});
topicDropdown.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    topicDropdown.open = false;
    topicDropdown.querySelector('summary').focus();
  }
});
cards.addEventListener('click', event => {
  const topicButton = event.target.closest('button[data-topic]');
  if (topicButton) {
    setTopic(topicButton.dataset.topic);
    return;
  }
  const reset = event.target.closest('#reset-empty');
  if (reset) {
    resetAll();
    return;
  }
  const card = event.target.closest('.editorial-entry');
  if (!card || event.defaultPrevented || event.button !== 0 ||
      event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
  // Native title link handles activation. The rest of the card follows that same link.
  if (event.target.closest('a')) return;
  window.location.assign(card.querySelector('.entry-title-link').href);
});
function resetAll() {
  search.value = '';
  activeTopics.clear();
  setCategory('All');
}
clearFilters.addEventListener('click', resetAll);
search.addEventListener('input', render);
document.getElementById('year').textContent = new Date().getFullYear();
render();

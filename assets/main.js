// Optional tags improve search and describe each write-up. For future incidents, use category:'Incident Report' with relevant tags.
// Edit this array to add write-ups. Never claim a template is a completed lab.
const posts = [
  {title:'TryHackMe Write-up Template',category:'TryHackMe',tags:['Lab','Enumeration'],level:'Template',date:'Starter',description:'A reusable layout for documenting rooms, commands and lessons learned.',url:'writeups/template.html'},
  {title:'CTF Write-up Checklist',category:'CTF',tags:['CTF','Methodology'],level:'Template',date:'Starter',description:'A structured approach to explaining a CTF challenge from start to finish.',url:'writeups/template.html'},
  {title:'Network Investigation Notes',category:'Networking',tags:['Network Analysis','Protocols'],level:'Template',date:'Starter',description:'A place to explain network traffic, protocols, evidence and conclusions.',url:'writeups/template.html'}
];
let category='All';
const cards=document.getElementById('cards'),search=document.getElementById('search'),count=document.getElementById('count');
function escapeHtml(s){return s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function safeUrl(u){const url=String(u||'');return /^(?:writeups\/|https:\/\/)/.test(url)?escapeHtml(encodeURI(url)):'#writeups';}
function render(){const q=search.value.toLowerCase().trim();const matching=posts.filter(p=>(category==='All'||p.category===category)&&[p.title,p.category,p.description,...(p.tags||[])].join(' ').toLowerCase().includes(q));count.textContent=`${matching.length} ${matching.length===1?'entry':'entries'}`;cards.innerHTML=matching.length?matching.map(p=>`<a class="entry entry-link" href="${safeUrl(p.url)}" aria-label="Open write-up: ${escapeHtml(p.title)}"><div class="head"><span class="tag">${escapeHtml(p.category)}</span><span class="level">${escapeHtml(p.level)}</span></div><h3>${escapeHtml(p.title)}</h3><p>${escapeHtml(p.description)}</p><div class="entry-tags">${(p.tags||[]).map(t=>`<span class="topic-tag">${escapeHtml(t)}</span>`).join('')}</div><div class="foot"><span>${escapeHtml(p.date)}</span><span class="read-more">Open write-up ↗</span></div></a>`).join(''):'<p class="fineprint">No matching write-ups yet. Try another search or category.</p>';}
// Full-card links remain native anchors; this fallback makes child clicks explicit.
cards.addEventListener('click',event=>{
  if(event.defaultPrevented||event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;
  const card=event.target.closest('a.entry-link');
  if(!card||!cards.contains(card))return;
  // Let the browser navigate via the card anchor, preserving normal history and semantics.
  if(event.target!==card){event.preventDefault();window.location.assign(card.href);}
});
search.addEventListener('input',render);
const dropdown=document.getElementById('category-dropdown');
const categoryLabel=document.getElementById('category-label');
const filterButtons=[...document.querySelectorAll('#filters button')];
filterButtons.forEach(button=>button.addEventListener('click',()=>{
  category=button.dataset.filter;
  categoryLabel.textContent=category==='All'?'All Categories':category;
  filterButtons.forEach(b=>{
    const selected=b===button;
    b.classList.toggle('active',selected);
    b.setAttribute('aria-pressed',String(selected));
  });
  dropdown.open=false;
  render();
}));
document.addEventListener('click',event=>{if(dropdown.open&&!dropdown.contains(event.target))dropdown.open=false;});
dropdown.addEventListener('keydown',event=>{if(event.key==='Escape'){dropdown.open=false;dropdown.querySelector('summary').focus();}});
document.getElementById('year').textContent=new Date().getFullYear();render();

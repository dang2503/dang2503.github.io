// Edit this array to add write-ups. Never claim a template is a completed lab.
const posts = [
  {title:'TryHackMe Write-up Template',category:'TryHackMe',level:'Template',date:'Starter',description:'A reusable layout for documenting rooms, commands and lessons learned.',url:'writeups/template.html'},
  {title:'CTF Write-up Checklist',category:'CTF',level:'Template',date:'Starter',description:'A structured approach to explaining a CTF challenge from start to finish.',url:'writeups/template.html'},
  {title:'Network Investigation Notes',category:'Networking',level:'Template',date:'Starter',description:'A place to explain network traffic, protocols, evidence and conclusions.',url:'writeups/template.html'}
];
let category='All';
const cards=document.getElementById('cards'),search=document.getElementById('search'),count=document.getElementById('count');
function escapeHtml(s){return s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function render(){const q=search.value.toLowerCase().trim();const matching=posts.filter(p=>(category==='All'||p.category===category)&&[p.title,p.category,p.description].join(' ').toLowerCase().includes(q));count.textContent=`${matching.length} ${matching.length===1?'entry':'entries'}`;cards.innerHTML=matching.length?matching.map(p=>`<article class="entry"><div class="head"><span class="tag">${escapeHtml(p.category)}</span><span class="level">${escapeHtml(p.level)}</span></div><h3>${escapeHtml(p.title)}</h3><p>${escapeHtml(p.description)}</p><div class="foot"><span>${escapeHtml(p.date)}</span><a href="${encodeURI(p.url)}">Read write-up ↗</a></div></article>`).join(''):'<p class="fineprint">No matching write-ups yet. Try another search or category.</p>';}
search.addEventListener('input',render);document.querySelectorAll('#filters button').forEach(button=>button.addEventListener('click',()=>{category=button.dataset.filter;document.querySelectorAll('#filters button').forEach(b=>b.classList.toggle('active',b===button));render();}));document.getElementById('year').textContent=new Date().getFullYear();render();

const skills=[["Teamwork / Collaboration",85,"Strong"],["Time management",80,"Strong"],["Java",35,"Beginner"],["HTML",35,"Beginner"],["CSS",35,"Beginner"],["C#",35,"Beginner"]];
document.getElementById('skills').innerHTML=skills.map(s=>`<div class="skill"><div class="r"><span>${s[0]}</span><span class="mono">${s[2]}</span></div><div class="track"><i style="width:${s[1]}%"></i></div></div>`).join('');

const root=document.documentElement,tb=document.getElementById('theme');
function setTheme(t,save){root.setAttribute('data-theme',t);tb.textContent=t==='dark'?'☀':'☾';tb.setAttribute('aria-label',t==='dark'?'Switch to light theme':'Switch to dark theme');if(save){try{localStorage.setItem('theme',t)}catch(e){}}}
let saved='dark';try{saved=localStorage.getItem('theme')||'dark'}catch(e){}
setTheme(saved==='light'?'light':'dark',false);
tb.addEventListener('click',()=>setTheme(root.getAttribute('data-theme')==='dark'?'light':'dark',true));
const ids=['home','about','education','family','friends'];
function route(){const h=(location.hash||'#home').slice(1);const id=ids.includes(h)?h:'home';
ids.forEach(i=>document.getElementById(i).classList.toggle('on',i===id));
document.querySelectorAll('nav a').forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+id));scrollTo(0,0)}
addEventListener('hashchange',route);route();
const txt="BAUTISTA, ANNA NICOLE",el=document.getElementById('typed');let n=0,del=false;
const reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
function tick(){if(reduce){el.textContent=txt;return}
el.textContent=txt.slice(0,n);let t=del?40:110;
if(!del&&n===txt.length){del=true;t=2200}else if(del&&n===0){del=false;t=500}else n+=del?-1:1;
setTimeout(tick,t)}tick();

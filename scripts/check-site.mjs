import { readdir, readFile, access } from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';
const root = path.resolve('docs/.vitepress/dist');
const routes=['index.html','study/index.html','projects/index.html','dashboard/index.html','logs/index.html','toolbox/index.html','about/index.html','projects/p3dx.html','projects/d435-yolo.html','projects/herbal.html'];
for (const route of routes) { const html=await readFile(path.join(root,route),'utf8'); assert(html.includes('<main'), route); }
const math=await readFile(path.join(root,'study/slam/triangulation.html'),'utf8');
assert(math.includes('mjx-container'),'MathJax output missing');
assert(math.includes('shiki'),'Code highlighting missing');
let checked=0;
async function walk(dir) {
 for(const e of await readdir(dir,{withFileTypes:true})) {
  const p=path.join(dir,e.name); if(e.isDirectory()){await walk(p);continue;} if(!e.name.endsWith('.html'))continue;
  const html=await readFile(p,'utf8');
  for(const m of html.matchAll(/(?:href|src)="([^"#?]+)(?:[?#][^"]*)?"/g)) {
   let url=m[1]; if(!url.startsWith('/robotics-lab/'))continue;
   url=decodeURIComponent(url.slice('/robotics-lab/'.length));
   const file=path.join(root,url); const candidates=url.endsWith('/')?[path.join(file,'index.html')]:[file,file+'.html',path.join(file,'index.html')];
   let ok=false;for(const c of candidates){try{await access(c);ok=true;break;}catch{}}
   assert(ok,`Broken URL ${m[1]} in ${p}`);checked++;
  }
 }
}
await walk(root);
console.log(`PASS: ${routes.length} required routes; MathJax; Shiki; ${checked} internal links/assets`);

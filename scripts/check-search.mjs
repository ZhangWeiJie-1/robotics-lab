import { readdir } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import path from 'node:path';
import assert from 'node:assert/strict';
import MiniSearch from 'minisearch';
import { resolveConfig } from 'vitepress';
const config=await resolveConfig('docs','build','production');
const options=config.site.themeConfig.search.options.miniSearch;
const dir=path.resolve('docs/.vitepress/dist/assets/chunks');
const file=(await readdir(dir)).find(x=>x.startsWith('@localSearchIndexroot.'));
assert(file,'No built search index');
const {default:indexJson}=await import(pathToFileURL(path.join(dir,file)).href);
const search=MiniSearch.loadJSON(indexJson,{fields:['title','titles','text'],storeFields:['title','titles'],...options?.options});
for(const [q,route] of [['线程','/projects/herbal'],['重投影','/study/slam/pnp'],['光流','/study/slam/optical-flow'],['TF','/toolbox/ros-debug']]) {
 const result=search.search(q,{fuzzy:.2,prefix:true,boost:{title:4,text:2,titles:1},...options?.searchOptions});
 assert(result.some(r=>r.id.includes(route)),`${q} must find ${route}; got ${result.map(r=>r.id)}`);
}
console.log('PASS: built full-text index finds 线程, 重投影, 光流, TF in expected pages');

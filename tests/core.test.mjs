import { test } from 'node:test';
import assert from 'node:assert/strict';
import { resolveBase, filterEntries } from '../docs/.vitepress/theme/lib/content.mjs';
test('Pages base supports user and repository sites',()=>{
 assert.equal(resolveBase('robotics-lab'),'/robotics-lab/');
 assert.equal(resolveBase('ZhangWeiJie-1.github.io'),'/');
 assert.throws(()=>resolveBase('../unsafe'));
});
test('Chinese full query and topic filters compose without mutating data',()=>{
 const entries=[{title:'三角测量',topic:'视觉 SLAM',summary:'深度与视差'},{title:'TF 排错',topic:'ROS',summary:'坐标变换'}];
 assert.equal(filterEntries(entries,'深度','视觉 SLAM').length,1);
 assert.equal(filterEntries(entries,'深度','ROS').length,0);
 assert.equal(filterEntries(entries,'missing','全部').length,0);
 assert.equal(filterEntries(entries,'  tf ','全部')[0].title,'TF 排错');
 assert.equal(entries.length,2);
});

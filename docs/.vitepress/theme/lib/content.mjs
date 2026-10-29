export function resolveBase(repo = 'robotics-lab') {
 if (!/^[a-zA-Z0-9_.-]+$/.test(repo) || repo === '..') throw new Error('Invalid repository name');
 return repo.toLowerCase().endsWith('.github.io') ? '/' : `/${repo}/`;
}
export function filterEntries(entries, query = '', topic = '全部') {
 const q = query.trim().toLocaleLowerCase();
 return entries.filter(e => (topic === '全部' || e.topic === topic) && `${e.title} ${e.summary} ${e.topic}`.toLocaleLowerCase().includes(q));
}

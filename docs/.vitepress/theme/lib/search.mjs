// Self-contained: VitePress serializes this function into client configuration.
// Han unigrams support single characters; bigrams preserve substring matches.
export function tokenizeSearch(text) {
 const parts = text.toLocaleLowerCase().match(/[\p{Script=Han}]+|[\p{Letter}\p{Number}_]+/gu) || [];
 return parts.flatMap(part => {
  if (!/\p{Script=Han}/u.test(part)) return [part];
  const chars = Array.from(part);
  return [...chars, ...chars.slice(0,-1).map((char,i)=>char+chars[i+1])];
 });
}

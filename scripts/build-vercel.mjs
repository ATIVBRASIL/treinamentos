import { cp, readFile, writeFile, readdir, rm } from 'node:fs/promises';
import path from 'node:path';
const root=process.cwd();
const output=path.join(root,'public-site');
const isProduction=process.env.VERCEL_ENV==='production';
const origin='https://treinamentos.ativbrasil.com.br';
await rm(output,{recursive:true,force:true});
await cp(path.join(root,'dist'),output,{recursive:true});
async function pages(dir){for(const item of await readdir(dir,{withFileTypes:true})){const p=path.join(dir,item.name);if(item.isDirectory())await pages(p);else if(item.name.endsWith('.html')&&item.name!=='404.html'){let html=await readFile(p,'utf8');if(isProduction)html=html.replace('content="noindex, nofollow"','content="index, follow, max-image-preview:large"');await writeFile(p,html);}}}
await pages(output);
await writeFile(path.join(output,'robots.txt'),isProduction?`User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`:'User-agent: *\nDisallow: /\n');
console.log(`Built ${isProduction?'production (indexable)':'preview (noindex)'} static site.`);

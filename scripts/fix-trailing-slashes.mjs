import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, extname } from 'path';

const pages = [
  '/contact',
  '/crawl-space-dehumidifier-raleigh-nc',
  '/crawl-space-dehumidifier-cary-nc',
  '/crawl-space-dehumidifier-apex-nc',
  '/crawl-space-dehumidifier-holly-springs-nc',
  '/crawl-space-dehumidifier-fuquay-varina-nc',
  '/crawl-space-mold-treatment-raleigh',
  '/encapsulated-crawl-space-dehumidifier-raleigh-nc',
  '/whole-house-dehumidifier-raleigh',
  '/erv-installation-raleigh-nc',
  '/service-areas',
  '/blog',
  '/about',
  '/privacy',
  '/blog/why-raleigh-homes-have-humidity-problems',
  '/blog/dehumidifier-cost-raleigh-nc',
  '/blog/crawl-space-encapsulation-vs-dehumidifier-raleigh',
  '/blog/signs-your-home-has-humidity-problem',
  '/blog/new-home-humidity-problems-raleigh-nc',
];

function walk(dir) {
  let files = [];
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) files.push(...walk(p));
    else if (['.astro', '.md'].includes(extname(p))) files.push(p);
  }
  return files;
}

let totalFixed = 0;
for (const file of walk('src')) {
  let content = readFileSync(file, 'utf8');
  let original = content;
  for (const page of pages) {
    const escaped = page.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const re = new RegExp(`href="${escaped}"`, 'g');
    content = content.replace(re, `href="${page}/"`);
  }
  if (content !== original) {
    writeFileSync(file, content);
    console.log('Fixed:', file);
    totalFixed++;
  }
}
console.log('Total files fixed:', totalFixed);

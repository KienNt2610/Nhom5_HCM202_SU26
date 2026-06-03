import fs from 'fs';
import path from 'path';

const indexPath = path.resolve('dist/index.html');

// read HTML
let html = fs.readFileSync(indexPath, 'utf8');

// find href of stylesheet (Vite build)
const match = html.match(/<link rel="stylesheet"[^>]*href="([^"]+)"/);

if (!match) {
  console.error('❌ Not found tag <link rel="stylesheet"> in dist/index.html');
  process.exit(1);
}

const cssHref = match[1];
console.log('✔ Found CSS:', cssHref);

// replace placeholder
html = html.replace(/href="CSS_PLACEHOLDER"/, `href="${cssHref}"`);

// ghi lại file
fs.writeFileSync(indexPath, html, 'utf8');

console.log('✔ Preload updated!');

// GitHub Pages serves this site under a sub-path (https://choki-dev.github.io/norlhatravels.com/), but the pages link
// with plain root paths ("/about/", "/tailor-made/#enquire"). After `astro build` with BASE_PATH set, this prefixes
// those links in dist/**/*.html, and root url(...) references in dist/**/*.css. Astro's own asset URLs already
// carry the base and are left alone. Does nothing when BASE_PATH is unset or "/".
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const base = (process.env.BASE_PATH || '/').replace(/\/$/, '');
if (!base) process.exit(0);

const esc = base.slice(1).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
// href="/x" / src="/x" / action="/x" / content="/x" / poster="/x" — not protocol-relative "//" and not already prefixed
const attr = new RegExp(`\\b(href|src|action|content|poster)="/(?!/|${esc}(?:/|"))`, 'g');
// url(/x), url('/x'), url("/x") in stylesheets
const cssUrl = new RegExp(`url\\((['"]?)/(?!/|${esc}/)`, 'g');

let files = 0;
const walk = (dir) => {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name.endsWith('.html') || e.name.endsWith('.css')) {
      const text = readFileSync(p, 'utf8');
      const out = e.name.endsWith('.html')
        ? text.replace(attr, `$1="${base}/`).replace(cssUrl, `url($1${base}/`)
        : text.replace(cssUrl, `url($1${base}/`);
      if (out !== text) writeFileSync(p, out), files++;
    }
  }
};
walk('dist');
console.log(`prefix-base: prefixed root links with ${base} in ${files} files`);

const fs = require('fs');
const cp = require('child_process');

const files = cp.execSync('find src/app -name "*.js"').toString().split('\n').filter(Boolean);

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  // Replace src={var} with src={var.src || var}
  const srcRegex = /src=\{([a-zA-Z0-9_\.]+)\}/g;
  if (srcRegex.test(content)) {
    content = content.replace(srcRegex, (match, p1) => {
      // Avoid replacing if it already has .src or if it's an inline string
      if (p1.endsWith('.src') || p1.startsWith('"') || p1.startsWith("'")) return match;
      return `src=\{${p1}.src || ${p1}\}`;
    });
    changed = true;
  }

  // Replace url(${var}) with url(${var.src || var})
  const urlRegex = /url\(\\\$\{\s*([a-zA-Z0-9_\.]+)\s*\}\)/g;
  if (urlRegex.test(content)) {
    content = content.replace(urlRegex, (match, p1) => {
      if (p1.endsWith('.src')) return match;
      return `url(\\\${${p1}.src || ${p1}})`;
    });
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(file, content);
    console.log('Fixed images in', file);
  }
});

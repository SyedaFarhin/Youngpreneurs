const fs = require('fs');
const cp = require('child_process');

const files = cp.execSync('find src/app -name "*.js"').toString().split('\n').filter(Boolean);

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  const btnRegex = /<button\s+className=\"([^\"]+)\"\s+onClick=\{\(\)\s*=>\s*window\.open\(\"([^\"]+)\",\s*\"_blank\"\)\}\s*>([\s\S]*?)<\/button>/g;
  
  if (btnRegex.test(content)) {
    content = content.replace(btnRegex, '<a href=\"$2\" target=\"_blank\" rel=\"noopener noreferrer\" className=\"$1\" style={{ display: \'inline-block\', textDecoration: \'none\', textAlign: \'center\' }}>$3</a>');
    changed = true;
  }

  const btnRegex2 = /<button\s+onClick=\{\(\)\s*=>\s*window\.open\(\"([^\"]+)\",\s*\"_blank\"\)\}\s+className=\"([^\"]+)\">([\s\S]*?)<\/button>/g;
  if (btnRegex2.test(content)) {
    content = content.replace(btnRegex2, '<a href=\"$1\" target=\"_blank\" rel=\"noopener noreferrer\" className=\"$2\" style={{ display: \'inline-block\', textDecoration: \'none\', textAlign: \'center\' }}>$3</a>');
    changed = true;
  }
  
  const btnRegex3 = /<button([\s\S]*?)className=\"([^\"]+)\"([\s\S]*?)onClick=\{\(\)\s*=>\s*window\.open\(\"([^\"]+)\",\s*\"_blank\"\)\}([\s\S]*?)>([\s\S]*?)<\/button>/g;
  if (btnRegex3.test(content)) {
    content = content.replace(btnRegex3, '<a href=\"$4\" target=\"_blank\" rel=\"noopener noreferrer\" className=\"$2\" style={{ display: \'inline-block\', textDecoration: \'none\', textAlign: \'center\' }}$1$3$5>$6</a>');
    changed = true;
  }

  if (
    (file.includes('success-stories/page.js') || file.includes('youngpreneur-voices/page.js')) && 
    !content.includes('"use client"')
  ) {
    content = '"use client";\n' + content;
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(file, content);
    console.log('Updated', file);
  }
});

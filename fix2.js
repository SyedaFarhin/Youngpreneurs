const fs = require('fs');

const map = {
  'src/app/contact/page.js': ['contactHeaderBg'],
  'src/app/about-us/page.js': ['headerBg'],
  'src/app/youngpreneur-voices/page.js': ['voicesBanner'],
  'src/app/page.js': ['home2', 'home4'],
  'src/app/competition-details/page.js': ['academyHeaderBg'],
  'src/app/a-message-to-parents/page.js': ['forParentsHeader'],
  'src/app/youngpreneur-academy/page.js': ['academy', 'academy'],
  'src/app/media-press/page.js': ['mediaHeaderBg'],
  'src/app/team/page.js': ['teamHeaderBg'],
  'src/app/success-stories/page.js': ['successStoriesHeaderBg'],
  'src/app/for-schools/page.js': ['backgroundImage', 'forSchoolsHeaderBg']
};

for (const [file, vars] of Object.entries(map)) {
  if (!fs.existsSync(file)) continue;
  let content = fs.readFileSync(file, 'utf8');
  let i = 0;
  content = content.replace(/url\(\\\$\{\.src \|\| \}\)/g, () => {
    let v = vars[i++];
    return `url(\${${v}.src || ${v}})`;
  });
  
  // Wait, the corrupted string was `url(${.src || })` directly? Let's check:
  content = content.replace(/url\(\$\{\.src \|\| \}\)/g, () => {
    let v = vars[i++];
    return `url(\${${v}.src || ${v}})`;
  });

  fs.writeFileSync(file, content);
}
console.log('Restored corrupted urls');

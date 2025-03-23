import  jsdoc2md from 'jsdoc-to-markdown';
import fs from 'fs';
const apiDocs = await jsdoc2md.render({ files: 'src/**/*.js' });
await fs.writeFileSync('docs/api.md', apiDocs);


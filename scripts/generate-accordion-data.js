import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { faker } from '@faker-js/faker';

const COUNT = 6;
const DESCRIPTION_MAX_LENGTH = 100;

const truncate = (text, maxLength) =>
  text.length > maxLength ? `${text.slice(0, maxLength).trimEnd()} ...` : text;

const data = Array.from({ length: COUNT }, () => ({
  id: faker.database.mongodbObjectId(),
  title: faker.lorem.words({ min: 3, max: 6 }),
  description: truncate(faker.lorem.paragraph(), DESCRIPTION_MAX_LENGTH),
}));

const entries = data
  .map(
    ({ id, title, description }) =>
      `  {\n    id: '${id}',\n    title: '${title}',\n    description: '${description.replace(/'/g, "\\'")}',\n  },`
  )
  .join('\n');

const output = `const data = [\n${entries}\n];\n\nexport default data;\n`;

const outPath = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  '../src/components/01_accordion/data.ts'
);

fs.writeFileSync(outPath, output);
console.log(`Wrote ${data.length} items to ${outPath}`);

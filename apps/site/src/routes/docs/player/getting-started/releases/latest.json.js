import { sync as globby } from 'fast-glob';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

import { sortMonthYearFiles } from '$lib/utils/date';

const cwd = dirname(fileURLToPath(import.meta.url));
const files = globby('./**/*.md', { cwd });
const slug = sortMonthYearFiles(files)[0].replace(/\.md($|\/)/, '');

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get() {
  return {
    body: {
      slug,
    },
  };
}

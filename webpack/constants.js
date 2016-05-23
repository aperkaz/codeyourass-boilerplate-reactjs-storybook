import { resolve, join } from 'path';

import root from 'app-root-path';

// Root path of the project.
export const ROOT = root.toString();

// Configurable as system variable.
export const {
  THEME = 'bare',
  PORT = 3000,
  // Possible one other important variable is
  // NODE_ENV
} = process.env;

export const APP_PATH = join(ROOT, 'app');

// Output setting.
export const OUTPUT_PATH = join(ROOT, 'build');
export const OUTPUT_FILENAME = '[name].js';

// Builds according environment.
export const ENV_STORYBOOK = 'storybook';

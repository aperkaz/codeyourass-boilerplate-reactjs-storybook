import { APP_PATH } from '../constants';
import { join } from 'path';

export const storybook = {
  extensions: ['', '.js', '.jsx'],
  alias: {
    // Load stub for react-intl which is not needed in storybook
    // We don't need translations
    'react-intl': join(APP_PATH, 'mocks', 'ReactIntlStub.jsx'),
  },
};

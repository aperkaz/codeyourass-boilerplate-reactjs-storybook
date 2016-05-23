import { configure } from '@kadira/storybook';

const spread = require.context('../app', true, /stories.jsx?$/);

function loadStories() {
  spread.keys().forEach((filename) => spread(filename));
}

configure(loadStories, module);

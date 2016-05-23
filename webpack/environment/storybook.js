import { storybook as module } from './../options/module';
import { storybook as plugins } from './../options/plugins';
import { storybook as resolve } from './../options/resolve';

const storybook = {
  debug: false,
  profile: false,
  module,
  plugins,
  resolve,
};

export default storybook;

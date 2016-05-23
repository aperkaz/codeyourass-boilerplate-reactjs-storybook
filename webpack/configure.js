import storybook from './environment/storybook';
import { ENV_STORYBOOK } from './constants';

const configure = (ENVIRONMENT) => {
  switch (ENVIRONMENT) {
    case ENV_STORYBOOK:
      return storybook;
    default:
      return storybook;
  }
};

export default configure;

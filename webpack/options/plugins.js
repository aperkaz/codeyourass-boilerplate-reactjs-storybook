import Copy from 'copy-webpack-plugin';

export const storybook = [
  new Copy([{
    from: '.storybook/static/',
    to: './'
  }]),
];

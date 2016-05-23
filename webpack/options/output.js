import { OUTPUT_PATH, OUTPUT_FILENAME } from './../constants';

const { assign } = Object;

//eslint-disable-next-line
export const common = {
  path: OUTPUT_PATH,
  filename: OUTPUT_FILENAME,
};

export const development = assign({}, common);

export const productionClient = assign({}, common);

export const productionServer = assign({}, common);

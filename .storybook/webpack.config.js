require('babel-core/register');
const { NODE_ENV } = process.env;
module.exports = require('./../webpack/configure').default(NODE_ENV);

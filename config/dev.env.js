'use strict';
const merge = require('webpack-merge');
const prodEnv = require('./prod.env');

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  mockUrl: '" https://www.easy-mock.com/mock/5b97f18ea7e9571f105d3ff2/api"',
  baseUrl: '" http://localhost/spmkt/web/api/v0"'
});

// modules/index.js
const config = require('../config');
const vendor = require(`./${config.vendor}/service`);

module.exports = vendor;
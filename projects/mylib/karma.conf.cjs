module.exports = function (config) {
  // Build standard config for project 'mylib'
  karmaConfig = require('../../test/karma-base.conf.cjs')('mylib');
  config.set(karmaConfig);
};

module.exports = function (config) {
  // Build standard config for project 'myapp'
  karmaConfig = require('../../test/karma-base.conf.cjs')('myapp');
  config.set(karmaConfig);
};

'use strict';

var utils = require('../utils');

module.exports = function(existing, app) {
  existing = utils.arrayify(existing);
  return {
    type: ['array', 'string'],
    normalize: function(val, key, config, schema) {
      if (!val) return [];

      if (typeof val === 'string') {
        val = val.split(',');
      }
      config[key] = val;
      return val;
    }
  };
};
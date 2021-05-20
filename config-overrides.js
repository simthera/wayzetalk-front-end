const rewireStyledComponents = require('react-app-rewire-styled-components');

/* config-overrides.js */
module.exports = function override(config, env) {
  config = rewireStyledComponents(config, env); //eslint-disable-line
  return config;
};

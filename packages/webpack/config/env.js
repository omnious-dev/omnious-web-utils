// Global import
const dotenv = require('dotenv');

// Local import
const logger = require('../scripts/logger');

// Load environment variables from .env file
dotenv.config();

function getEnvOrDefault(key, defaultVal) {
  if (!process.env[key]) {
    if (typeof defaultVal === 'undefined') {
      logger.error(`WARNING: Missing ENV var ${key}`);
    } else {
      process.env[key] = defaultVal;
    }
  }

  return process.env[key];
}

const env = getEnvOrDefault('NODE_ENV', 'development');
const configValue = {
  // base env
  base: {
    env,
    cdn: getEnvOrDefault('CDN_URL', ''),
    google: getEnvOrDefault('GA_ID', 'UA-XXXXX-Y'),
    facebook: getEnvOrDefault('FB_ID', '')
  },
  production: {
    tag: getEnvOrDefault('CIRCLE_TAG', 'prod')
  },
  development: {
    host: getEnvOrDefault('HOST', 'localhost'),
    port: getEnvOrDefault('PORT', 3000)
  },
  test: {}
};
const config = { ...configValue.base, ...configValue[env] };

module.exports = config;

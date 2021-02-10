const ip = require('ip').address();
const clientConfig = require('../config.json');
const packageJson = require('../package.json');

module.exports = function(app) {
  app.get('/iboard/health', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    const responseData = {
      'Environment': clientConfig.env,
      'Instance IP address': ip,
      'Application Version': packageJson.version,
      'Build Version': clientConfig.build_version,
      'Node Version': process.version,
    };
    res.status(200).send(JSON.stringify(responseData, null, 4));
  });
};
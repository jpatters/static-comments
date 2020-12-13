const serverless = require('serverless-http');

let api
try {
  const StaticmanAPI = require('../staticman/server')
  api = new StaticmanAPI()
} catch (e) {
  console.error(e)
  process.exit(1)
}

module.exports.handler = serverless(api.server);

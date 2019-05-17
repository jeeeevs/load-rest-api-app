const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  apmServiceName: process.env.APM_SERVICE_NAME,
  apmSecretToken: process.env.APM_SECRET_TOKEN,
  apmServerUrl: process.env.APM_SERVER_URL,
  appPort: process.env.APP_PORT
};

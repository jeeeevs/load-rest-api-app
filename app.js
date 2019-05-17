const { apmSecretToken, apmServerUrl, apmServiceName, appPort } = require('./config');
const apm = require('elastic-apm-node').start({
  serviceName: apmServiceName,
  // secretToken: apmSecretToken,
  serverUrl: apmServerUrl
});
const express = require('express');
const app = express();
const crypto = require('crypto');

const hash = password => {
  const salt = crypto.randomBytes(128).toString('base64');
  const hash = crypto.pbkdf2Sync(password, salt, 10000, 512, 'sha1');
  return hash.toString('base64');
};
app.get('/mypass', (req, res) => {
  const encPwd = hash('mypasss');
  res.send(`Hello World! ${encPwd}`);
});
app.listen(appPort, () => console.log(`App listening on port ${appPort}!`));

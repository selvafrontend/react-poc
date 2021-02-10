/* eslint consistent-return:0 import/order:0 */

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const hbs = require('hbs');
const logger = require('./logger');

const argv = require('./argv');
const port = require('./port');
const setup = require('./middlewares/frontendMiddlewares');
const { NODE_ENV } = process.env;
const isDev = NODE_ENV == 'development';
const ngrok =
  (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel
    ? require('ngrok')
    : false;
const { resolve } = require('path');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// If you need a backend, e.g. an API, add your custom backend-specific middleware here
// app.use('/api', myApi);

// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

// use the gzipped bundle
// use gzip / br bundle
if (NODE_ENV !== 'development') {
  app.get('*.js', (req, res, next) => {
    if (req.header('Accept-Encoding').includes('br')) {
      req.url += '.br';
      res.set('Content-Encoding', 'br');
    } else {
      req.url += '.gz';
      res.set('Content-Encoding', 'gzip');
    }
    res.set('Content-Type', 'text/javascript');
    next();
  });
  app.get('*.css', (req, res, next) => {
    if (req.header('Accept-Encoding').includes('br')) {
      req.url += '.br';
      res.set('Content-Encoding', 'br');
    } else {
      req.url += '.gz';
      res.set('Content-Encoding', 'gzip');
    }
    res.set('Content-Type', 'text/css');
    next();
  });
}

// hbs setting
app.set('view engine', 'html');
app.engine('html', hbs.__express);

// Start your app.
app.listen(port, host, async err => {
  if (err) {
    return logger.error(err.message);
  }

  // Connect to ngrok in dev mode
  if (ngrok) {
    let url;
    try {
      url = await ngrok.connect(port);
    } catch (e) {
      return logger.error(e);
    }
    logger.appStarted(port, prettyHost, url);
  } else {
    logger.appStarted(port, prettyHost);
  }
});
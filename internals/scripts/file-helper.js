const fs = require('fs-extra');
const path = require('path');

const env = process.env.NODE_ENV;
const buildPath = './build/';
let configFile = '';

switch (env) {
    case 'development':
        configFile = 'config.dev.json';
        break;
    case 'qa':
        configFile = 'config.qa.json';
        break;
    case 'stage':
        configFile = 'config.stg.json';
        break;
    case 'production':
        configFile = 'config.prd.json';
        break;
}


const compile = () => Promise.resolve()
    .then(() => console.log('Starting to move files...'))
    .then(() => console.log('Target application environment: ' + env))
    .then(() => {
        console.log(`Copying server config key file to build`);
        fs.copySync(
            path.join('./config/server/' + configFile),
            path.join(buildPath + 'config.json')
        );
        console.log(`Copied server config file to build`);
    })
    .then(() => {
        console.log(`Copying client config file to build`);
        fs.copySync(
            path.join('./config/client/' + configFile),
            path.join(buildPath + 'config.json')
        );
        console.log(`Copied client config file to build`);
    })
   .then(() => {
        console.log(`Copying main.js file to build main.js`);
        fs.copySync(
            path.join('./server/index.js'),
            path.join(buildPath + 'index.js')
        );
        console.log(`Copied server/index.js file to build index.js`);
    })
    .then(() => {
        console.log(`Copying middleware.js file to build middleware.js`);
        fs.copySync(
            path.join('./server/middleware.js'),
            path.join(buildPath + 'middleware.js')
        );
        console.log(`Copied middleware.js file to build middleware.js`);
    })
    .then(() => {
        console.log(`Copying logger.js file to build logger.js`);
        fs.copySync(
            path.join('./server/logger.js'),
            path.join(buildPath + 'logger.js')
        );
        console.log(`Copied logger.js file to build logger.js`);
    })
    .then(() => {
        console.log(`Copying argv.js file to build argv.js`);
        fs.copySync(
            path.join('./server/argv.js'),
            path.join(buildPath + 'argv.js')
        );
        console.log(`Copied argv.js file to build argv.js`);
    })
    .then(() => {
        console.log(`Copying port.js file to build port.js`);
        fs.copySync(
            path.join('./server/port.js'),
            path.join(buildPath + 'port.js')
        );
        console.log(`Copied port.js file to build port.js`);
    })
   .then(() => {
        console.log(`Copying server package.json file to build`);
        fs.copySync(
            path.join('./server/package.json'),
            path.join(buildPath + 'package.json')
        );
        console.log(`Copied package.json file to build`);
    })
    .then(() => {
        console.log(`Copying forever.json file to build`);
        fs.copySync(
            path.join('./server/forever.json'),
            path.join(buildPath + 'forever.json')
        );
        console.log(`Copied forever.json file to build`);
    })
    .then(() => {
        console.log(`Copying route files to build`);
        fs.copySync(
            path.join('./server/routes'),
            path.join(buildPath + 'routes')
        );
        console.log(`Copied route files to build`);
    })
    .then(() => {
        console.log(`Copying Middleware files to build`);
        fs.copySync(
            path.join('./server/middlewares'),
            path.join(buildPath + 'middlewares')
        );
        console.log(`Copied middleware files to build`);
    })
    .then(() => {
        console.log(`Files movement successfull.`)
    })
    .catch((err) => console.log('Files helper encountered errors.', err));

compile();
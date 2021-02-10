const fs = require('fs-extra');
const path = require('path');

const env = process.env.NODE_ENV;
const distPath = './dist/';
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
        console.log(`Copying server config key file to dist`);
        fs.copySync(
            path.join('./config/server/' + configFile),
            path.join(distPath + 'config.json')
        );
        console.log(`Copied server config file to dist`);
    })
    .then(() => {
        console.log(`Copying client config file to dist`);
        fs.copySync(
            path.join('./config/client/' + configFile),
            path.join(distPath + 'config.json')
        );
        console.log(`Copied client config file to dist`);
    })
   .then(() => {
        console.log(`Copying main.js file to dist main.js`);
        fs.copySync(
            path.join('./server/index.js'),
            path.join(distPath + 'index.js')
        );
        console.log(`Copied server/index.js file to dist index.js`);
    })
    .then(() => {
        console.log(`Copying middleware.js file to dist middleware.js`);
        fs.copySync(
            path.join('./server/middleware.js'),
            path.join(distPath + 'middleware.js')
        );
        console.log(`Copied middleware.js file to dist middleware.js`);
    })
   .then(() => {
        console.log(`Copying package.json file to dist`);
        fs.copySync(
            path.join('./server/package.json'),
            path.join(distPath + 'package.json')
        );
        console.log(`Copied package.json file to dist`);
    })
    .then(() => {
        console.log(`Copying forever.json file to dist`);
        fs.copySync(
            path.join('./server/forever.json'),
            path.join(distPath + 'forever.json')
        );
        console.log(`Copied forever.json file to dist`);
    })
    .then(() => {
        console.log(`Copying route files to dist`);
        fs.copySync(
            path.join('./server/routes'),
            path.join(distPath + 'routes')
        );
        console.log(`Copied route files to dist`);
    })
    .then(() => {
        console.log(`Files movement successfull.`)
    })
    .catch((err) => console.log('Files helper encountered errors.', err));

compile();
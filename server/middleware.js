const path = require("path");

module.exports = function (app) {
    app.use("/iboard/api/*", function (req, res, next) {
        if (req.headers && req.headers['x-authorization']) {
            const nconf = require("nconf");
            nconf.argv()
                .env()
                .file({ file: path.join(__dirname, './config.json') });

            // Initialize from properties and cache keys initially.
            // onKeysLoadedCb will be called when keys have been fully loaded- before then, validations may fail.
        }
        else {
            res.status(401).send('Unauthorized - Invalid token.');
        }
    });
}